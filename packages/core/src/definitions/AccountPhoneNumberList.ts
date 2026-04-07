import AccountPhoneNumberInfo from "./AccountPhoneNumberInfo.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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
