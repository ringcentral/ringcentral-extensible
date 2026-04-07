import AddPhoneNumbersResponseItem from "./AddPhoneNumbersResponseItem.js";

interface AddPhoneNumbersResponse {
  /**
   * List of account phone numbers
   * Required
   */
  records?: AddPhoneNumbersResponseItem[];
}

export default AddPhoneNumbersResponse;
