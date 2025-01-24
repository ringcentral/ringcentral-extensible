import type AccountPhoneNumberInfo from "./AccountPhoneNumberInfo";
import type EnumeratedPagingModel from "./EnumeratedPagingModel";

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
