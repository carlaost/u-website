export const features = {
  free: [
    'Limited searches (5 per month)',
    'Limited search results shown',
    'Analyzes abstracts, not full texts',
    'Limited report chats and summaries',
  ],
  pro: [
    'Full access to Undermind',
    'Uses the latest, best AI models',
    'Analyzes full texts, where available',
    'Analyzes timeline and categories',
    'Extend searches',
    'Export references',
    'Unlimited report chats',
  ],
  team: [
    'Discounted pricing',
    'Easily manage team members',
    'Priority customer support',
    'Centralized billing',
  ],
  enterprise: [
    'Sitewide organizational login',
    'Custom pricing',
    'Manage multiple labs and teams',
    'Onboarding seminars and webinars',
    'Admin dashboard with usage data',
    'Dedicated support',
  ],
};

export const freeTier = {
  productName: 'Free',
  price: 0,
  priceId: 'free',
  monthlyPrice: '0',
  annualPrice: '0',
  signUpButtonText: 'Sign Up for Free',
  signUpButtonEncouragementText: 'Get started with our free tier',
  pricingDetailsText: 'Includes basic features and limited usage',
  seatOptions: [],
};

export const enterpriseTier = {
  productName: 'Enterprise',
  price: 0,
  priceId: 'enterprise',
  monthlyPrice: '0',
  annualPrice: '0',
  signUpButtonText: 'Contact Us',
  signUpButtonEncouragementText: '',
  pricingDetailsText: '',
  seatOptions: [],
};

export const PricingOptions = {
  subscriptionOptions: {
    monthly: {
      academic: {
        productName: 'Undermind Monthly',
        price: 20,
        priceId: 'price_1P96L9IkmFQH0SXbVnkRf2ZD',
        monthlyPrice: '20',
        annualPrice: '240',
        signUpButtonText: 'Sign up',
        signUpButtonEncouragementText: 'Switch to annual to save 20%',
        pricingDetailsText: 'per month',
      },
      industry: {
        productName: 'Undermind Monthly',
        price: 40,
        priceId: 'price_1PkXU5IkmFQH0SXbLbHhhJi3',
        monthlyPrice: '40',
        annualPrice: '480',
        signUpButtonText: 'Sign up',
        signUpButtonEncouragementText: 'Switch to annual to save 20%',
        pricingDetailsText: 'per month',
      },
    },
    annual: {
      academic: {
        productName: 'Undermind Annual',
        price: 192,
        priceId: 'price_1P9I5bIkmFQH0SXbVEoG6h0Y',
        monthlyPrice: '16',
        annualPrice: '192',
        signUpButtonText: 'Sign up',
        signUpButtonEncouragementText: 'You save 20% with annual',
        pricingDetailsText: 'per month, billed annually',
      },
      industry: {
        productName: 'Undermind Annual',
        price: 384,
        priceId: 'price_1PkXQsIkmFQH0SXbIdglsVuo',
        monthlyPrice: '32',
        annualPrice: '384',
        signUpButtonText: 'Sign up',
        signUpButtonEncouragementText: 'You save 20% with annual',
        pricingDetailsText: 'per month, billed annually',
      },
    },
    teams_monthly: {
      academic: {
        productName: 'Undermind Teams',
        priceId: 'price_1Q05AZIkmFQH0SXb6dBy2CKB',
        pricingDetailsText: 'per person per month',
        seatOptions: [
          { numSeats: 2, price: '18.7' },
          { numSeats: 3, price: '18.7' },
          { numSeats: 4, price: '18.7' },
          { numSeats: 5, price: '18.7' },
          { numSeats: 6, price: '18.7' },
          { numSeats: 7, price: '18.7' },
          { numSeats: 8, price: '18.7' },
          { numSeats: 9, price: '18.7' },
          { numSeats: 10, price: '18.7' },
          { numSeats: 11, price: '17.7' },
          { numSeats: 12, price: '17.7' },
          { numSeats: 13, price: '17.7' },
          { numSeats: 14, price: '17.7' },
          { numSeats: 15, price: '17.7' },
          { numSeats: 16, price: '17.7' },
          { numSeats: 17, price: '17.7' },
          { numSeats: 18, price: '17.7' },
          { numSeats: 19, price: '17.7' },
          { numSeats: 20, price: '17.7' },
          { numSeats: 21, price: '17.7' },
          { numSeats: 22, price: '17.7' },
          { numSeats: 23, price: '17.7' },
          { numSeats: 24, price: '17.7' },
          { numSeats: 25, price: '17.7' },
          { numSeats: 30, price: '16.6' },
          { numSeats: 35, price: '16.6' },
          { numSeats: 40, price: '16.6' },
          { numSeats: 45, price: '16.6' },
          { numSeats: 50, price: '16.6' },
          { numSeats: 60, price: '15.6' },
          { numSeats: 70, price: '15.6' },
          { numSeats: 80, price: '15.6' },
          { numSeats: 90, price: '15.6' },
          { numSeats: 100, price: '15.6' },
          { numSeats: 125, price: '15.6' },
          { numSeats: 150, price: '15.6' },
          { numSeats: 175, price: '15.6' },
          { numSeats: 200, price: '15.6' },
        ],
      },
      industry: {
        productName: 'Undermind Teams',
        priceId: 'price_1Q05BjIkmFQH0SXboNbfJi1j',
        pricingDetailsText: 'per person per month',
        seatOptions: [
          { numSeats: 2, price: '37.5' },
          { numSeats: 3, price: '37.5' },
          { numSeats: 4, price: '37.5' },
          { numSeats: 5, price: '37.5' },
          { numSeats: 6, price: '37.5' },
          { numSeats: 7, price: '37.5' },
          { numSeats: 8, price: '37.5' },
          { numSeats: 9, price: '37.5' },
          { numSeats: 10, price: '37.5' },
          { numSeats: 11, price: '35.4' },
          { numSeats: 12, price: '35.4' },
          { numSeats: 13, price: '35.4' },
          { numSeats: 14, price: '35.4' },
          { numSeats: 15, price: '35.4' },
          { numSeats: 16, price: '35.4' },
          { numSeats: 17, price: '35.4' },
          { numSeats: 18, price: '35.4' },
          { numSeats: 19, price: '35.4' },
          { numSeats: 20, price: '35.4' },
          { numSeats: 21, price: '35.4' },
          { numSeats: 22, price: '35.4' },
          { numSeats: 23, price: '35.4' },
          { numSeats: 24, price: '35.4' },
          { numSeats: 25, price: '35.4' },
          { numSeats: 30, price: '33.3' },
          { numSeats: 35, price: '33.3' },
          { numSeats: 40, price: '33.3' },
          { numSeats: 45, price: '33.3' },
          { numSeats: 50, price: '33.3' },
          { numSeats: 60, price: '31.2' },
          { numSeats: 70, price: '31.2' },
          { numSeats: 80, price: '31.2' },
          { numSeats: 90, price: '31.2' },
          { numSeats: 100, price: '31.2' },
          { numSeats: 125, price: '31.2' },
          { numSeats: 150, price: '31.2' },
          { numSeats: 175, price: '31.2' },
          { numSeats: 200, price: '31.2' },
        ],
      },
    },
    teams_annual: {
      academic: {
        productName: 'Undermind Teams',
        priceId: 'price_1PeMPXIkmFQH0SXb51XBaXqy',
        pricingDetailsText: 'per person per month, billed annually',
        seatOptions: [
          { numSeats: 2, price: '15' },
          { numSeats: 3, price: '15' },
          { numSeats: 4, price: '15' },
          { numSeats: 5, price: '15' },
          { numSeats: 6, price: '15' },
          { numSeats: 7, price: '15' },
          { numSeats: 8, price: '15' },
          { numSeats: 9, price: '15' },
          { numSeats: 10, price: '15' },
          { numSeats: 11, price: '14.17' },
          { numSeats: 12, price: '14.17' },
          { numSeats: 13, price: '14.17' },
          { numSeats: 14, price: '14.17' },
          { numSeats: 15, price: '14.17' },
          { numSeats: 16, price: '14.17' },
          { numSeats: 17, price: '14.17' },
          { numSeats: 18, price: '14.17' },
          { numSeats: 19, price: '14.17' },
          { numSeats: 20, price: '14.17' },
          { numSeats: 21, price: '14.17' },
          { numSeats: 22, price: '14.17' },
          { numSeats: 23, price: '14.17' },
          { numSeats: 24, price: '14.17' },
          { numSeats: 25, price: '14.17' },
          { numSeats: 30, price: '13.33' },
          { numSeats: 35, price: '13.33' },
          { numSeats: 40, price: '13.33' },
          { numSeats: 45, price: '13.33' },
          { numSeats: 50, price: '13.33' },
          { numSeats: 60, price: '12.5' },
          { numSeats: 70, price: '12.5' },
          { numSeats: 80, price: '12.5' },
          { numSeats: 90, price: '12.5' },
          { numSeats: 100, price: '12.5' },
          { numSeats: 125, price: '12.5' },
          { numSeats: 150, price: '12.5' },
          { numSeats: 175, price: '12.5' },
          { numSeats: 200, price: '12.5' },
        ],
      },
      industry: {
        productName: 'Undermind Teams',
        priceId: 'price_1PkXWwIkmFQH0SXbTzjl54dj',
        pricingDetailsText: 'per person per month, billed annually',
        seatOptions: [
          { numSeats: 2, price: '30' },
          { numSeats: 3, price: '30' },
          { numSeats: 4, price: '30' },
          { numSeats: 5, price: '30' },
          { numSeats: 6, price: '30' },
          { numSeats: 7, price: '30' },
          { numSeats: 8, price: '30' },
          { numSeats: 9, price: '30' },
          { numSeats: 10, price: '30' },
          { numSeats: 11, price: '28.33' },
          { numSeats: 12, price: '28.33' },
          { numSeats: 13, price: '28.33' },
          { numSeats: 14, price: '28.33' },
          { numSeats: 15, price: '28.33' },
          { numSeats: 16, price: '28.33' },
          { numSeats: 17, price: '28.33' },
          { numSeats: 18, price: '28.33' },
          { numSeats: 19, price: '28.33' },
          { numSeats: 20, price: '28.33' },
          { numSeats: 21, price: '28.33' },
          { numSeats: 22, price: '28.33' },
          { numSeats: 23, price: '28.33' },
          { numSeats: 24, price: '28.33' },
          { numSeats: 25, price: '28.33' },
          { numSeats: 30, price: '26.67' },
          { numSeats: 35, price: '26.67' },
          { numSeats: 40, price: '26.67' },
          { numSeats: 45, price: '26.67' },
          { numSeats: 50, price: '26.67' },
          { numSeats: 60, price: '25' },
          { numSeats: 70, price: '25' },
          { numSeats: 80, price: '25' },
          { numSeats: 90, price: '25' },
          { numSeats: 100, price: '25' },
          { numSeats: 125, price: '25' },
          { numSeats: 150, price: '25' },
          { numSeats: 175, price: '25' },
          { numSeats: 200, price: '25' },
        ],
      },
    },
  },
};
