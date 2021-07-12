import {BusinessAddressInfo} from './index';

class ModifyAccountBusinessAddressRequest {
  /**
   * Company business name
   */
  company?: string;

  /**
   * Company business email address
   */
  email?: string;

  /**
   */
  businessAddress?: BusinessAddressInfo;

  /**
   * Custom site name
   */
  mainSiteName?: string;
}
export default ModifyAccountBusinessAddressRequest;
