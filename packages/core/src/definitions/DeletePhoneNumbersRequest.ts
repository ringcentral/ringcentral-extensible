import DeletePhoneNumbersRequestItem from './DeletePhoneNumbersRequestItem';

interface DeletePhoneNumbersRequest {
  /**
   * List of phone numbers or phone ids to be deleted
   * Required
   */
  records?: DeletePhoneNumbersRequestItem[];
}

export default DeletePhoneNumbersRequest;
