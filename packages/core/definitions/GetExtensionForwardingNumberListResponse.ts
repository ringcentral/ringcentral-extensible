import {
  ForwardingNumberInfo,
  CallHandlingNavigationInfo,
  CallHandlingPagingInfo,
} from './index';

class GetExtensionForwardingNumberListResponse {
  /**
   * Link to the forwarding number list resource
   */
  uri?: string;

  /**
   * List of forwarding phone numbers
   */
  records?: ForwardingNumberInfo[];

  /**
   */
  navigation?: CallHandlingNavigationInfo;

  /**
   */
  paging?: CallHandlingPagingInfo;
}

export default GetExtensionForwardingNumberListResponse;
