import {
  GrantInfo,
  ProvisioningNavigationInfo,
  ProvisioningPagingInfo,
} from './index';

class GetExtensionGrantListResponse {
  /**
   * Link to the list of extension grants
   */
  uri?: string;

  /**
   * List of extension grants with details
   * Required
   */
  records?: GrantInfo[];

  /**
   * Required
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   * Required
   */
  paging?: ProvisioningPagingInfo;
}

export default GetExtensionGrantListResponse;
