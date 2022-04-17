import {
  BasicExtensionInfoResource,
  RolesRegionalSettingsResource,
  ContactAddressInfoResource,
} from './index';

class RolesBusinessSiteResource {
  /**
   * Required
   */
  id?: string;

  /**
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
