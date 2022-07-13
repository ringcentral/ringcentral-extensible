import GetExtensionListInfoResponse from './GetExtensionListInfoResponse';
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo';
import ProvisioningPagingInfo from './ProvisioningPagingInfo';

interface GetExtensionListResponse {
  /**
   * Link to the extension list resource
   */
  uri?: string;

  /**
   * List of extensions with extension information
   * Required
   */
  records?: GetExtensionListInfoResponse[];

  /**
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   */
  paging?: ProvisioningPagingInfo;
}

export default GetExtensionListResponse;
