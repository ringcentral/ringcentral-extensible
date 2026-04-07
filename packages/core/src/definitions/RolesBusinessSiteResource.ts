import type BasicExtensionInfoResource from "./BasicExtensionInfoResource.js";
import type ContactAddressInfoResource from "./ContactAddressInfoResource.js";
import type RolesRegionalSettingsResource from "./RolesRegionalSettingsResource.js";

interface RolesBusinessSiteResource {
  /**
   * Link to a business site resource
   */
  uri?: string;

  /**
   * Required
   */
  id?: string;

  /**
   * Format: email
   */
  email?: string;

  /**
   */
  code?: string;

  /**
   */
  name?: string;

  /**
   */
  extensionNumber?: string;

  /**
   */
  callerIdName?: string;

  /**
   */
  operator?: BasicExtensionInfoResource;

  /**
   */
  regionalSettings?: RolesRegionalSettingsResource;

  /**
   */
  businessAddress?: ContactAddressInfoResource;
}

export default RolesBusinessSiteResource;
