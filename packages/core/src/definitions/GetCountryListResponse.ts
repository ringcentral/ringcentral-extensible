import GetCountryInfoDictionaryResponse from './GetCountryInfoDictionaryResponse';
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo';
import ProvisioningPagingInfo from './ProvisioningPagingInfo';

class GetCountryListResponse {
  /**
   * Link to the list of countries supported
   */
  uri?: string;

  /**
   * List of countries with the country data
   * Required
   */
  records?: GetCountryInfoDictionaryResponse[];

  /**
   * Required
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   * Required
   */
  paging?: ProvisioningPagingInfo;
}

export default GetCountryListResponse;
