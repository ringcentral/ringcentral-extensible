import type ForwardingNumberInfo from './ForwardingNumberInfo';
import type PageNavigationModel from './PageNavigationModel';
import type EnumeratedPagingModel from './EnumeratedPagingModel';

interface GetExtensionForwardingNumberListResponse {
  /**
   * Link to the forwarding number list resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of forwarding phone numbers
   */
  records?: ForwardingNumberInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default GetExtensionForwardingNumberListResponse;
