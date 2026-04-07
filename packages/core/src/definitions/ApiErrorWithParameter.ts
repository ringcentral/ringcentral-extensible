/**
 * Generalized API error structure suitable for any error type
 */
interface ApiErrorWithParameter {
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

  /**
   * The name of the API parameter/attribute which caused the error
   */
  parameterName?: string;

  /**
   * The value of the API parameter/attribute which caused the error
   */
  parameterValue?: string;
}

export default ApiErrorWithParameter;
