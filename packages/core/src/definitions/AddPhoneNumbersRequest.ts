import AddPhoneNumberRequestItem from "./AddPhoneNumberRequestItem";

interface AddPhoneNumbersRequest {
  /**
   * List of account phone numbers
   * Required
   */
  records?: AddPhoneNumberRequestItem[];
}

export default AddPhoneNumbersRequest;
