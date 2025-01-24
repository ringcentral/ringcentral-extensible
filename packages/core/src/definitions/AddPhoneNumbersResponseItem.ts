import type ApiError from "./ApiError";

interface AddPhoneNumbersResponseItem {
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
   * Required
   * Example: +16501234567
   */
  phoneNumber?: string;

  /**
   * Phone number activation status. Determine whether phone number migration is completed on the partner side.
   */
  activationStatus?: "Active" | "Inactive";
}

export default AddPhoneNumbersResponseItem;
