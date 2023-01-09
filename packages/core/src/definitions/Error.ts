interface Error {
  /**
   * Logical error code
   * Required
   * Example: XYZ-123
   */
  errorCode?: string;

  /**
   * User-friendly error message
   * Required
   * Example: Something went wrong
   */
  message?: string;

  /**
   * The name of the request parameter or attribute that caused the error
   * Example: accountId
   */
  parameterName?: string;
}

export default Error;
