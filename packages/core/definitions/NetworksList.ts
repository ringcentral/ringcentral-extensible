import {
  NetworkInfo,
  ProvisioningNavigationInfo,
  ProvisioningPagingInfo,
} from '.';

class NetworksList {
  /**
   * Link to a networks resource
   */
  uri?: string;

  /**
   */
  records?: NetworkInfo[];

  /**
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   */
  paging?: ProvisioningPagingInfo;
}

export default NetworksList;
