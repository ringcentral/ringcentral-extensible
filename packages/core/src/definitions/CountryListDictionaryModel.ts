import CountryInfoDictionaryModel from './CountryInfoDictionaryModel';
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo';
import ProvisioningPagingInfo from './ProvisioningPagingInfo';

interface CountryListDictionaryModel {
  /**
   * Link to the list of countries supported
   * Format: uri
   */
  uri?: string;

  /**
   * List of countries with the country data
   * Required
   */
  records?: CountryInfoDictionaryModel[];

  /**
   * Required
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   * Required
   */
  paging?: ProvisioningPagingInfo;
}

export default CountryListDictionaryModel;
