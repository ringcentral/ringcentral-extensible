import {
  LanguageInfo,
  ProvisioningNavigationInfo,
  ProvisioningPagingInfo,
} from './index';

class LanguageList {
  /**
   * Canonical URI of the language list resource
   */
  uri?: string;

  /**
   * Language data
   */
  records?: LanguageInfo[];

  /**
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   */
  paging?: ProvisioningPagingInfo;
}

export default LanguageList;
