/**
 * Single (of potential multiple) error entry in an ASG error response
 */
interface ErrorEntry {
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
}

export default ErrorEntry;
