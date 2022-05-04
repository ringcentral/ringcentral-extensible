import GetTimezoneInfoResponse from './GetTimezoneInfoResponse';
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo';
import ProvisioningPagingInfo from './ProvisioningPagingInfo';

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
