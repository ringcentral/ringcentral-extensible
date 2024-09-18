import type ContactBusinessAddressInfo from './ContactBusinessAddressInfo';
import type RegionalSettings from './RegionalSettings';
import type OperatorInfo from './OperatorInfo';

interface SiteInfo {
  /**
   * Internal identifier of a site extension
   */
  id?: string;

  /**
   * Link to a site resource
   * Format: uri
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
   * Custom name of a caller. Max number of characters is 15 (only
   *  alphabetical symbols, numbers and commas are supported)
   */
  callerIdName?: string;

  /**
   * Site extension contact email
   * Format: email
   */
  email?: string;

  /**
   */
  businessAddress?: ContactBusinessAddressInfo;

  /**
   */
  regionalSettings?: RegionalSettings;

  /**
   * Site access status for cross-site limitation
   */
  siteAccess?: 'Limited' | 'Unlimited';

  /**
   */
  operator?: OperatorInfo;

  /**
   * Site code value. Returned only if specified
   */
  code?: string;
}

export default SiteInfo;
