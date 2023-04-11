import BasicExtensionInfoResource from './BasicExtensionInfoResource';
import RolesRegionalSettingsResource from './RolesRegionalSettingsResource';
import ContactAddressInfoResource from './ContactAddressInfoResource';

interface RolesBusinessSiteResource {
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
