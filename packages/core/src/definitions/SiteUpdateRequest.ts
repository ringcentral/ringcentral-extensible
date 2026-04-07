import type ContactBusinessAddressInfo from "./ContactBusinessAddressInfo.js";
import type OperatorInfo from "./OperatorInfo.js";
import type RegionalSettings from "./RegionalSettings.js";

interface SiteUpdateRequest {
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
   */
  operator?: OperatorInfo;

  /**
   * Site access status for cross-site limitation
   */
  siteAccess?: "Limited" | "Unlimited";

  /**
   */
  accessibleSiteIds?: string[];
}

export default SiteUpdateRequest;
