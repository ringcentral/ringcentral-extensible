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
   * Required
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   * Required
   */
  paging?: ProvisioningPagingInfo;
}
export default GetLocationListResponse;
