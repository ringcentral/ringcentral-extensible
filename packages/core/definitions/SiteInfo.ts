import {
  ContactBusinessAddressInfo,
  RegionalSettings,
  OperatorInfo,
} from './index';

class SiteInfo {
  /**
   * Internal identifier of a site extension
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
   * Extension user email
   */
  email?: string;

  /**
   */
  businessAddress?: ContactBusinessAddressInfo;

  /**
   */
  regionalSettings?: RegionalSettings;

  /**
   */
  operator?: OperatorInfo;

  /**
   * Site code value. Returned only if specified
   */
  code?: string;
}
export default SiteInfo;
