import AddPhoneNumberRequestItem from "./AddPhoneNumberRequestItem.js";

interface AddPhoneNumbersRequest {
  /**
   * List of account phone numbers
   * Required
   */
  records?: AddPhoneNumberRequestItem[];
}

export default AddPhoneNumbersRequest;
