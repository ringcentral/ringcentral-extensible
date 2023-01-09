/**
 * Generalized API error structure
*/
interface ErrorModel {
  /**
   * Logical error code (typically, 3 letters followed with number, dash separated)
   * Required
   * Example: XXX-123
   */
  errorCode?: string;

  /**
   * User-friendly error message
   * Required
   * Example: Something went wrong
   */
  message?: string;
}

export default ErrorModel;
