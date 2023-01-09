interface ErrorBody {
  /**
   * ANL error code
   * Required
   */
  errorCode?: string;

  /**
   * Detailed description of the error
   * Required
   */
  message?: string;
}

export default ErrorBody;
