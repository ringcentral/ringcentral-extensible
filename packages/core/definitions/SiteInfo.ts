import {ContactBusinessAddressInfo, RegionalSettings, OperatorInfo} from '.';

class SiteInfo {
  /**
   * Internal idetifier of a site extension
   */
  id?: string;

  /**
   * Link to a site resource
   */
  uri?: string;

  /**
   * Extension user first name
   */
  name?: string;

  /**
   * Extension number
   */
  extensionNumber?: string;

  /**
   * Custom name of a caller. Max number of characters is 15 (only alphabetical symbols, numbers and commas are supported)
   */
  callerIdName?: string;

  /**
   * Exetnsion user email
   */
  email?: string;

  /**
   * Extension user business address. The default is Company settings
   */
  businessAddress?: ContactBusinessAddressInfo;

  /**
   * Information about regional settings. The default is Company settings
   */
  regionalSettings?: RegionalSettings;

  /**
   * Site Fax/SMS recipient (operator) reference. Multi-level IVR should be enabled
   */
  operator?: OperatorInfo;

  /**
   * Site code value. Returned only if specified
   */
  code?: string;
}

export default SiteInfo;
