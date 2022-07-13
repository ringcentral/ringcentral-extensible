import PhoneNumberResource from './PhoneNumberResource';

interface AccountResource {
  /**
   */
  companyName?: string;

  /**
   */
  federatedName?: string;

  /**
   */
  id?: string;

  /**
   */
  mainNumber?: PhoneNumberResource;
}

export default AccountResource;
