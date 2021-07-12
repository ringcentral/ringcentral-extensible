import {
  GetTimezoneInfoResponse,
  ProvisioningNavigationInfo,
  ProvisioningPagingInfo,
} from './index';

class GetTimezoneListResponse {
  /**
   * Link to the timezone list resource
   */
  uri?: string;

  /**
   * List of timezones
   * Required
   */
  records?: GetTimezoneInfoResponse[];

  /**
   * Required
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   * Required
   */
  paging?: ProvisioningPagingInfo;
}

export default GetTimezoneListResponse;
