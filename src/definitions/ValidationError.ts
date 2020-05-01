class ValidationError {
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

  /**
   */
  featureName?: string;

  /**
   */
  parameterValue?: string;
}

export default ValidationError;
