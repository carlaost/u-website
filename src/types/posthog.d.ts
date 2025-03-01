interface Window {
  posthog?: {
    capture: (eventName: string, properties?: Record<string, any>) => void;
    identify: (distinctId: string, properties?: Record<string, any>) => void;
    get_distinct_id: () => string;
  };
}
