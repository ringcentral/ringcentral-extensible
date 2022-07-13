import SubscriptionInfo from './SubscriptionInfo';

interface RecordsCollectionResourceSubscriptionResponse {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: SubscriptionInfo[];
}

export default RecordsCollectionResourceSubscriptionResponse;
