import type ContactBusinessAddressInfo from './ContactBusinessAddressInfo';
import type RegionalSettings from './RegionalSettings';
import type SiteOperatorReference from './SiteOperatorReference';

interface CreateSiteRequest {
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
   * Extension user email
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
   */
  operator?: SiteOperatorReference;

  /**
   * Site access status for cross-site limitation
   */
  siteAccess?: 'Limited' | 'Unlimited';

  /**
   */
  accessibleSiteIds?: string[];

  /**
   * Site code value
   */
  code?: string;
}

export default CreateSiteRequest;
