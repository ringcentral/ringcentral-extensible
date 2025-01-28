import ApiError from "./ApiError";

interface DeletePhoneNumbersResponseItem {
  /**
   * Indicates if this item was processed successfully during bulk operation.
   *  If false, `bulkItemErrors` attribute contains the list of errors
   * Required
   * Example: true
   */
  bulkItemSuccessful?: boolean;

  /**
   * The list of errors occurred during processing of particular item of bulk operation.
   *  Returned only if `bulkItemSuccessful` is false
   */
  bulkItemErrors?: ApiError[];

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

export default DeletePhoneNumbersResponseItem;
