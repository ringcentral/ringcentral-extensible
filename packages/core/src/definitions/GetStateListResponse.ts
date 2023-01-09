import GetStateInfoResponse from './GetStateInfoResponse';
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo';
import ProvisioningPagingInfo from './ProvisioningPagingInfo';

interface GetStateListResponse {
  /**
   * Link to a states list resource
   * Format: uri
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
