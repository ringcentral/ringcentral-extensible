import type ForwardingNumberInfo from "./ForwardingNumberInfo.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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
