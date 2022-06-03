class ModifySubscriptionRequest {
  /**
   * Collection of URIs to API resources
   * Required
   */
  eventFilters?: string[];

  /**
   * Subscription lifetime in seconds. Max value is 7 days (604800 sec). For *WebHook* transport type max value might be set up to 315360000 seconds (10 years)
   */
  expiresIn?: number;
}

export default ModifySubscriptionRequest;
