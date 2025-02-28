import { useState } from 'react';

import PricingCard from '@/components/ui/pricingCard';
import { RoundThumbSwitch } from '@/components/ui/switch';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabsCustom';
import {
  enterpriseTier,
  features,
  freeTier,
  PricingOptions,
} from '@/constants/pricing';
import { cn } from '@/lib/utils';

interface ProfileStatus {
  status:
    | 'pro_trial'
    | 'free'
    | 'pro'
    | 'enterprise'
    | 'custom_pro_access'
    | 'custom_enterprise_access';
}

interface PricingSectionProps {
  profileData?: ProfileStatus;
  hasProLikeAccess?: boolean;
  hasTeamsAccess?: boolean;
  defaultTab?: string;
  onTabChange?: (tab: string) => void;
  className?: string;
}

export function PricingSection({
  profileData,
  hasProLikeAccess = false,
  hasTeamsAccess = false,
  defaultTab = 'industry',
  onTabChange,
  className,
}: PricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(true);
  const [currentTab, setCurrentTab] = useState(defaultTab);

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
    onTabChange?.(value);
  };

  return (
    <div className={cn('w-full pt-20 max-w-7xl mx-auto', className)}>
      <h1 className="py-10 text-center">Pricing</h1>
      <Tabs
        className="w-full items-center justify-center px-4"
        value={currentTab}
        onValueChange={handleTabChange}
      >
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <TabsList className="w-full max-w-xs">
            <TabsTrigger
              value="industry"
              className={cn(
                'w-full',
                'data-[state=active]:bg-accent-focus data-[state=active]:text-slate-1'
              )}
            >
              Industry
            </TabsTrigger>
            <TabsTrigger
              value="academic"
              className={cn(
                'w-full',
                'data-[state=active]:bg-accent-focus data-[state=active]:text-slate-1'
              )}
            >
              Academic
            </TabsTrigger>
          </TabsList>
          <div className="flex flex-row gap-1 pb-8 pt-4 md:items-center md:pl-24">
            <span
              className={
                !isAnnual
                  ? 'text-accent-focus font-bold'
                  : 'text-text-muted line-through opacity-60'
              }
            >
              Monthly
            </span>
            <RoundThumbSwitch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <span
              className={
                isAnnual
                  ? 'text-accent-focus font-bold'
                  : 'text-text-muted line-through opacity-60'
              }
            >
              Annual
            </span>
            <span className="text-accent-focus font-bold">billing period</span>
          </div>
        </div>

        {/* Industry Tab */}
        <TabsContent
          value="industry"
          className="flex flex-col items-center justify-center gap-1 md:flex-row md:flex-wrap md:gap-4 lg:flex-row lg:flex-nowrap"
        >
          {/* FREE */}
          <PricingCard
            subscriptionOption={freeTier}
            profileData={profileData}
            features={features.free}
          />

          {/* PRO / Industry */}
          <PricingCard
            subscriptionOption={
              isAnnual
                ? PricingOptions.subscriptionOptions.annual.industry
                : PricingOptions.subscriptionOptions.monthly.industry
            }
            profileData={profileData}
            features={features.pro}
            alreadyHasPlan={hasProLikeAccess}
            alreadyHasPlanText="Your Current Plan"
          />

          {/* TEAMS / Industry */}
          <PricingCard
            subscriptionOption={
              isAnnual
                ? PricingOptions.subscriptionOptions.teams_annual.industry
                : PricingOptions.subscriptionOptions.teams_monthly.industry
            }
            profileData={profileData}
            features={features.team}
            alreadyHasPlan={hasTeamsAccess}
            alreadyHasPlanText="A Teams Plan is Active"
          />

          {/* ENTERPRISE */}
          <PricingCard
            subscriptionOption={enterpriseTier}
            profileData={profileData}
            features={features.enterprise}
          />
        </TabsContent>

        {/* Academic Tab */}
        <TabsContent
          value="academic"
          className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-4"
        >
          {/* FREE */}
          <PricingCard
            subscriptionOption={freeTier}
            profileData={profileData}
            features={features.free}
          />

          {/* PRO / Academic */}
          <PricingCard
            subscriptionOption={
              isAnnual
                ? PricingOptions.subscriptionOptions.annual.academic
                : PricingOptions.subscriptionOptions.monthly.academic
            }
            profileData={profileData}
            features={features.pro}
            alreadyHasPlan={hasProLikeAccess}
            alreadyHasPlanText="Your Current Plan"
          />

          {/* TEAMS / Academic */}
          <PricingCard
            subscriptionOption={
              isAnnual
                ? PricingOptions.subscriptionOptions.teams_annual.academic
                : PricingOptions.subscriptionOptions.teams_monthly.academic
            }
            profileData={profileData}
            features={features.team}
            alreadyHasPlan={hasTeamsAccess}
            alreadyHasPlanText="A Teams plan is active"
          />

          {/* ENTERPRISE */}
          <PricingCard
            subscriptionOption={enterpriseTier}
            profileData={profileData}
            features={features.enterprise}
          />
        </TabsContent>
      </Tabs>

      <p className="text-text-muted w-full text-center text-sm">
        <a
          href="mailto:support@undermind.ai"
          className="text-accent-focus font-semibold"
        >
          Contact us
        </a>{' '}
        for custom pricing and plans for universities and large organizations.
      </p>
    </div>
  );
}
