import { Check, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { Profile } from '@/types/profile';

interface SeatOption {
  numSeats: number;
  price: string;
}

interface SubscriptionOption {
  productName: string;
  price?: number;
  priceId: string;
  monthlyPrice?: string;
  annualPrice?: string;
  signUpButtonText?: string;
  signUpButtonEncouragementText?: string;
  pricingDetailsText: string;
  seatOptions?: SeatOption[];
}

const PRODUCT_MAPPING: Record<string, string> = {
  'Undermind Monthly': 'Pro',
  'Undermind Annual': 'Pro',
  'Undermind Teams': 'Team',
  Free: 'Free',
  Enterprise: 'Enterprise',
};

export default function PricingCard({
  subscriptionOption,
  profileData,
  features,
  alreadyHasPlan = false,
  alreadyHasPlanText = '',
}: {
  subscriptionOption: SubscriptionOption;
  profileData?: Profile;
  features: string[];
  alreadyHasPlan?: boolean;
  alreadyHasPlanText?: string;
}) {
  const product = PRODUCT_MAPPING[subscriptionOption.productName] || 'Free';

  // Original logic for "currentPlan" from profile status
  const currentPlan = profileData?.status
    ? {
        pro_trial: 'Free',
        free: 'Free',
        pro: 'Pro',
        enterprise: 'Pro',
        custom_pro_access: 'Pro',
        custom_enterprise_access: 'Pro',
      }[profileData.status]
    : undefined;

  // We keep the existing detection for "isCurrentPlan"
  const isCurrentPlan = currentPlan === product;

  const [selectedSeats, setSelectedSeats] = useState<number>(
    product === 'Team' ? 5 : 1
  );
  const [price, setPrice] = useState(() => {
    const fiveSeatsOption = subscriptionOption.seatOptions?.find(
      (option) => option.numSeats === 5
    );
    return fiveSeatsOption ? Number(fiveSeatsOption.price) : 0;
  });

  useEffect(() => {
    const currentSeatOption = subscriptionOption.seatOptions?.find(
      (option) => option.numSeats === selectedSeats
    );
    setPrice(currentSeatOption ? Number(currentSeatOption.price) : 0);
  }, [subscriptionOption, selectedSeats]);

  // Decide if the button should be disabled either because it is the same plan
  // or because user already has the plan from a different source (enterprise, custom, etc.)
  const disablePurchase = alreadyHasPlan || isCurrentPlan;

  // The actual label on the button
  let buttonLabel;
  if (!profileData) {
    // Anonymous user labels
    if (product === 'Enterprise') {
      buttonLabel = 'Contact Us';
    } else if (product === 'Team') {
      buttonLabel = 'Sign Up to Purchase';
    } else {
      buttonLabel = 'Try for Free';
    }
  } else {
    // Logged in user labels
    buttonLabel = 'Upgrade';
    if (disablePurchase) {
      buttonLabel = alreadyHasPlanText || 'Your Current Plan';
    } else if (product === 'Enterprise') {
      buttonLabel = 'Contact Us';
    } else if (product === 'Free') {
      buttonLabel = 'Downgrade';
    }
  }

  const handleButtonClick = () => {
    if (!profileData) {
      // For anonymous users
      if (product === 'Enterprise') {
        window.location.href = 'mailto:support@undermind.ai';
      } else {
        // Redirect to sign up page or show sign up modal
        window.location.href = '/auth/register';
      }
      return;
    }

    // For logged in users
    if (product === 'Enterprise') {
      window.location.href = 'mailto:support@undermind.ai';
      return;
    }

    // Here you would implement your own checkout logic
    if (subscriptionOption.priceId && !disablePurchase) {
      window.location.href = `/checkout?priceId=${subscriptionOption.priceId}&seats=${selectedSeats}`;
    }
  };

  return (
    <Card
      className={`relative mb-8 flex min-h-[28rem] w-full max-w-xs py-2 ${
        product === 'Pro' ? 'border-accent-focus min-h-[32rem]' : ''
      }`}
    >
      {product === 'Pro' && (
        <div
          className="absolute left-4 top-0 mb-8"
          style={{ transform: 'translateY(-50%)' }}
        >
          <span className="rounded-md bg-accent px-2 py-1 text-xs font-medium tracking-widest text-slate-1">
            POPULAR
          </span>
        </div>
      )}
      <CardContent
        className={`space-y-0 py-4${
          product === 'Pro' ? '6' : '2'
        } flex w-full grow flex-col`}
      >
        <h3 className="text-center">{product}</h3>

        <div className="flex h-full flex-col justify-between">
          <div>
            {product !== 'Enterprise' && product !== 'Free' && (
              <p className="text-slate-10">
                <span className="text-3xl font-black tracking-tight text-slate-12">
                  {product === 'Team'
                    ? `$${price}`
                    : `$${subscriptionOption.monthlyPrice}`}
                </span>
                <span className="text-text-muted text-base font-normal">
                  {' '}
                  {subscriptionOption.pricingDetailsText}
                </span>
              </p>
            )}
            {/* For Team subscription, show seat selector */}
            {product === 'Team' && (
              <Select
                defaultValue={`${selectedSeats}`}
                onValueChange={(value) => {
                  const seats = Number(value);
                  setSelectedSeats(seats);
                  const newPriceOption = subscriptionOption.seatOptions?.find(
                    (option) => option.numSeats === seats
                  );
                  setPrice(newPriceOption ? Number(newPriceOption.price) : 0);
                }}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select team size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Team Size</SelectLabel>
                    {subscriptionOption.seatOptions?.map(
                      (option: SeatOption) => (
                        <SelectItem
                          key={option.numSeats}
                          value={`${option.numSeats}`}
                        >
                          {option.numSeats} seats at ${option.price}
                        </SelectItem>
                      )
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          </div>

          <div>
            {/* If it's a Team card, we say "All features in Pro, plus..." */}
            {product === 'Team' && (
              <p className="font-semibold">All features in Pro, plus:</p>
            )}
            {product === 'Enterprise' && (
              <p className="font-semibold">All features in Team, plus:</p>
            )}

            {features.map((feature: string) => (
              <div key={feature} className="flex flex-row items-start gap-2">
                {product === 'Free' ? (
                  <X className="mt-1.5 size-4" />
                ) : (
                  <Check className="mt-1.5 size-4" />
                )}
                <p>{feature}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-1">
            <Button
              className="w-full px-4 md:px-4"
              variant={product === 'Pro' ? 'default' : 'outline'}
              disabled={disablePurchase}
              onClick={handleButtonClick}
            >
              {buttonLabel}
            </Button>
            <p className="text-text-muted text-sm font-normal">
              {disablePurchase
                ? ''
                : subscriptionOption.signUpButtonEncouragementText}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
