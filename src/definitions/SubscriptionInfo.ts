import {
  DisabledFilterInfo,
  NotificationDeliveryMode,
  NotificationBlacklistedData,
} from '.';

class SubscriptionInfo {
  /**
   * Internal identifier of a subscription
   */
  id?: string;

  /**
   * Canonical URI of a subscription
   */
  uri?: string;

  /**
   * Collection of API resources (message-store/presence/detailed presence) corresponding to events the user is subscribed to
   */
  eventFilters?: string[];

  /**
   * Collection of API resources (message-store/presence/detailed presence) corresponding to events the user is not subscribed to due to certain limitations
   */
  disabledFilters?: DisabledFilterInfo[];

  /**
   * Subscription expiration datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example 2016-03-10T18:07:52.534Z
   */
  expirationTime?: string;

  /**
   * Subscription lifetime in seconds
   * Default: 900
   */
  expiresIn?: number;

  /**
   * Subscription status
   */
  status?: 'Active' | 'Suspended' | 'Blacklisted';

  /**
   * Subscription creation datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example 2016-03-10T18:07:52.534Z
   */
  creationTime?: string;

  /**
   * Delivery mode data
   * Required
   */
  deliveryMode?: NotificationDeliveryMode;

  /**
   */
  blacklistedData?: NotificationBlacklistedData;

  /**
   * Notifications transportation provider name
   */
  transportType?: 'PubNub' | 'WebHook' | 'RC/APNS' | 'RC/GCM';

  /**
   * Name of a certificate. Supported for 'RC/APNS' and 'RC/GCM' transport types
   */
  certificateName?: string;

  /**
   * Identifier of a registration. Supported for 'RC/APNS' and 'RC/GCM' transport types
   */
  registrationId?: string;
}

export default SubscriptionInfo;
