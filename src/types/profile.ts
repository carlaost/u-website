export type ProfileStatus =
  | 'pro_trial'
  | 'free'
  | 'pro'
  | 'enterprise'
  | 'custom_pro_access'
  | 'custom_enterprise_access';

export interface Profile {
  status: ProfileStatus;
  // Add other profile fields as needed
}
