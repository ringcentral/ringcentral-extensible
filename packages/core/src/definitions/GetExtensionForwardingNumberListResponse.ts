import ForwardingNumberInfo from './ForwardingNumberInfo';
import NavigationInfo from './NavigationInfo';
import EnumeratedPaging from './EnumeratedPaging';

interface GetExtensionForwardingNumberListResponse {
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
  navigation?: NavigationInfo;

  /**
   */
  paging?: EnumeratedPaging;
}

export default GetExtensionForwardingNumberListResponse;
