import DisabledFilterInfo from './DisabledFilterInfo';
import NotificationDeliveryMode from './NotificationDeliveryMode';
import SubscriptionInfoBlacklistedData from './SubscriptionInfoBlacklistedData';

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
   */
  id?: string;

  /**
   * The list of event filter names corresponding to events the user is subscribed to
   * Required
   */
  eventFilters?: string[];

  /**
   * The list of event filter names corresponding to events the user is not subscribed to due to certain limitations
   */
  disabledFilters?: DisabledFilterInfo[];

  /**
   * Subscription expiration datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example *2016-03-10T18:07:52.534Z*
   * Required
   * Format: date-time
   */
  expirationTime?: string;

  /**
   * Subscription lifetime in seconds
   * Format: int32
   */
  expiresIn?: number;

  /**
   * Subscription status
   * Required
   */
  status?: ('Active' | 'Suspended' | 'Blacklisted');

  /**
   * Subscription creation datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example *2016-03-10T18:07:52.534*
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
