import BasicExtensionInfoResource from "./BasicExtensionInfoResource.js";
import RolesRegionalSettingsResource from "./RolesRegionalSettingsResource.js";
import ContactAddressInfoResource from "./ContactAddressInfoResource.js";

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

  /** */
  code?: string;

  /** */
  name?: string;

  /** */
  extensionNumber?: string;

  /** */
  callerIdName?: string;

  /** */
  operator?: BasicExtensionInfoResource;

  /** */
  regionalSettings?: RolesRegionalSettingsResource;

  /** */
  businessAddress?: ContactAddressInfoResource;
}

export default RolesBusinessSiteResource;
