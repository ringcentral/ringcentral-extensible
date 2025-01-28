import DeletePhoneNumbersRequestItem from "./DeletePhoneNumbersRequestItem";

interface DeletePhoneNumbersRequest {
  /**
   * List of phone numbers or phone IDs to be deleted
   * Required
   */
  records?: DeletePhoneNumbersRequestItem[];
}

export default DeletePhoneNumbersRequest;
