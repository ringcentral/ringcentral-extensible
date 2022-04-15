import { PhoneNumberResource } from './index';

class FederatedAccountResource {
  /**
   */
  companyName?: string;

  /**
   * Format: int32
   */
  conflictCount?: number;

  /**
   */
  federatedName?: string;

  /**
   */
  id?: string;

  /**
   */
  linkCreationTime?: string;

  /**
   */
  mainNumber?: PhoneNumberResource;
}
export default FederatedAccountResource;
