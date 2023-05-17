import AddPhoneNumbersResponseItem from './AddPhoneNumbersResponseItem';

interface AddPhoneNumbersResponse {
  /**
   * List of account phone numbers
   * Required
   */
  records?: AddPhoneNumbersResponseItem[];
}

export default AddPhoneNumbersResponse;
