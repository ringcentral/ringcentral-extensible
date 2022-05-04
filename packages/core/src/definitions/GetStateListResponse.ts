import { GetStateInfoResponse, ProvisioningNavigationInfo, ProvisioningPagingInfo } from './index';

class GetStateListResponse {
  /**
   * Link to the states list resource
   */
  uri?: string;

  /**
   * List of states
   */
  records?: GetStateInfoResponse[];

  /**
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   */
  paging?: ProvisioningPagingInfo;
}
export default GetStateListResponse;
