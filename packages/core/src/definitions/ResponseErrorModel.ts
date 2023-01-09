interface ResponseErrorModel {
  /**
   * Logical error code (typically, 3 letters followed with number, dash separated)
   * Example: XXX-123
   */
  errorCode?: string;

  /**
   * User-friendly error message
   * Example: Something went wrong
   */
  message?: string;

  /**
   * The name of the API parameter which caused the error
   * Example: status
   */
  parameterName?: string;
}

export default ResponseErrorModel;
