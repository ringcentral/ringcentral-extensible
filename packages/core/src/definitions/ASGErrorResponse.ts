import ErrorEntry from "./ErrorEntry.js";

/**
 * Error response
 */
interface ASGErrorResponse {
  /**
   * Error code
   * Required
   * Example: CMN-101
   */
  errorCode?: string;

  /**
   * Human-readable description of the error. Not suitable for end users.
   * Required
   * Example: AccountId 1234 is invalid
   */
  message?: string;

  /**
   */
  errors?: ErrorEntry[];
}

export default ASGErrorResponse;
