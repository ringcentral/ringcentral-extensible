/**
 * The indication of a number to be deleted - either "id" or "phoneNumber" must be specified.
 */
interface DeletePhoneNumbersRequestItem {
  /**
   * Internal unique identifier of a phone number
   * Example: 1162820004
   */
  id?: string;

  /**
   * Phone number in e.164 format (with '+' prefix)
   * Example: +16501234567
   */
  phoneNumber?: string;
}

export default DeletePhoneNumbersRequestItem;
