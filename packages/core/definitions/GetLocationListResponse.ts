import {
  LocationInfo,
  ProvisioningNavigationInfo,
  ProvisioningPagingInfo,
} from './index';

class GetLocationListResponse {
  /**
   * Link to the location list resource
   */
  uri?: string;

  /**
   * List of locations
   */
  records?: LocationInfo[];

  /**
   * Information on navigation
   * Required
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   * Information on paging
   * Required
   */
  paging?: ProvisioningPagingInfo;
}

export default GetLocationListResponse;
