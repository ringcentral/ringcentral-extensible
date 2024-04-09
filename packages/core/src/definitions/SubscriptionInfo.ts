import type DisabledFilterInfo from './DisabledFilterInfo';
import type NotificationDeliveryMode from './NotificationDeliveryMode';
import type SubscriptionInfoBlacklistedData from './SubscriptionInfoBlacklistedData';

interface SubscriptionInfo {
  /**
   * Canonical URI of a subscription resource
   * Required
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a subscription
   * Required
   * Example: 95fecfc9-9cdc-4e94-a78a-89fd65889d37
   */
  id?: string;

  /**
   * The list of event filter names corresponding to events the user is subscribed to
   * Required
   */
  eventFilters?: string[];

  /**
   * The list of event filter names corresponding to events the user is not subscribed to due to
   *  certain limitations
   */
  disabledFilters?: DisabledFilterInfo[];

  /**
   * Subscription expiration time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   *  format including timezone, for example *2016-03-10T18:07:52.534Z*
   * Required
   * Format: date-time
   */
  expirationTime?: string;

  /**
   * Subscription lifetime in seconds
   * Minimum: 1
   * Format: int32
   */
  expiresIn?: number;

  /**
   * Subscription status
   * Required
   */
  status?: 'Active' | 'Blacklisted';

  /**
   * Subscription creation time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   *  format including timezone, for example *2016-03-10T18:07:52.534*
   * Required
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Required
   */
  deliveryMode?: NotificationDeliveryMode;

  /**
   * Returned if a WebHook subscription is blacklisted
   */
  blacklistedData?: SubscriptionInfoBlacklistedData;
}

export default SubscriptionInfo;
