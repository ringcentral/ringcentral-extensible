import SubscriptionInfo from "./SubscriptionInfo.js";

interface SubscriptionListResource {
  /**
   * Canonical URI of a resource
   * Required
   * Format: uri
   */
  uri?: string;

  /**
   * Required
   */
  records?: SubscriptionInfo[];
}

export default SubscriptionListResource;
