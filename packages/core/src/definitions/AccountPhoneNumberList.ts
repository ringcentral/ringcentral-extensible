import AccountPhoneNumberInfo from './AccountPhoneNumberInfo';
import EnumeratedPagingModel from './EnumeratedPagingModel';

interface AccountPhoneNumberList {
  /**
   * List of account phone numbers
   * Required
   */
  records?: AccountPhoneNumberInfo[];

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default AccountPhoneNumberList;
