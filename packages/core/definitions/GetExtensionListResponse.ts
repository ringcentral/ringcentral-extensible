import {
  GetExtensionInfoResponse,
  ProvisioningNavigationInfo,
  ProvisioningPagingInfo,
} from './index';

class GetExtensionListResponse {
  /**
   * Link to the extension list resource
   */
  uri?: string;

  /**
   * List of extensions with extension information
   * Required
   */
  records?: GetExtensionInfoResponse[];

  /**
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   */
  paging?: ProvisioningPagingInfo;
}

export default GetExtensionListResponse;
