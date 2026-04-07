import type AccountPhoneNumberInfo from "./AccountPhoneNumberInfo.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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
