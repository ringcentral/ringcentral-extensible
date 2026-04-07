interface SubscriptionInfoBlacklistedData {
  /**
   * Time of adding subscription to a black list in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   *  format including timezone, for example *2016-03-10T18:07:52.534Z*
   * Format: date-time
   */
  blacklistedAt?: string;

  /**
   * Reason of adding subscription to a black list
   */
  reason?: string;
}

export default SubscriptionInfoBlacklistedData;
