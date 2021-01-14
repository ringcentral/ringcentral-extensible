import {ContactAddressInfoDevices} from './index';

class ExtensionContactInfo {
  /**
   * For User extension type only. Extension user first name
   */
  firstName?: string;

  /**
   * For User extension type only. Extension user last name
   */
  lastName?: string;

  /**
   * Extension user company name
   */
  company?: string;

  /**
   * Email of extension user
   */
  email?: string;

  /**
   * Extension user contact phone number
   */
  businessPhone?: string;

  /**
   */
  businessAddress?: ContactAddressInfoDevices;
}

export default ExtensionContactInfo;
