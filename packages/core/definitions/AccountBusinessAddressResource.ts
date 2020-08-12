import {ContactBusinessAddressInfo} from './index';

class AccountBusinessAddressResource {
  /**
   */
  uri?: string;

  /**
   */
  businessAddress?: ContactBusinessAddressInfo;

  /**
   */
  company?: string;

  /**
   */
  email?: string;

  /**
   * Custom site name
   */
  mainSiteName?: string;
}

export default AccountBusinessAddressResource;
