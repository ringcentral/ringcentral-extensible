interface ValidationError {
  /**
   * Error code
   */
  errorCode?: string;

  /**
   * Error message
   */
  message?: string;

  /**
   * Name of invalid parameter
   */
  parameterName?: string;
}

export default ValidationError;
