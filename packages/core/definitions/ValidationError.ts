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
   * Example: Sites
   */
  featureName?: string;

  /**
   * Example: SoftPhoneAutoLocationUpdate
   */
  parameterValue?: string;
}

export default ValidationError;
