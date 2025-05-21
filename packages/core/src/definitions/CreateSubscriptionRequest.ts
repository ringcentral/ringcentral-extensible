import NotificationDeliveryModeRequest from "./NotificationDeliveryModeRequest.js";

interface CreateSubscriptionRequest {
  /**
   * The list of event filters corresponding to events the user is subscribed to
   * Required
   */
  eventFilters?: string[];

  /**
   * Subscription lifetime in seconds. The maximum subscription lifetime depends upon the specified `transportType`:
   *
   *  | Transport type      | Maximum permitted lifetime     |
   *  | ------------------- | ------------------------------ |
   *  | `WebHook`           | 315360000 seconds (10 years)   |
   *  | `RC/APNS`, `RC/GSM` | 7776000 seconds (90 days)      |
   *  | `WebSocket`         | n/a (the parameter is ignored) |
   * Minimum: 1
   * Format: int32
   * Example: 1200
   */
  expiresIn?: number;

  /**
   * Required
   */
  deliveryMode?: NotificationDeliveryModeRequest;
}

export default CreateSubscriptionRequest;
