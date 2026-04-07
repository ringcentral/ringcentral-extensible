interface ClientErrorsResponseErrors {
    /**
   * Logical error code.
   */
  errorCode?: string;

  /**
   * Detailed user-friendly description of error.
   */
  message?: string;

  /**
   * Format: int32
   */
  parameterMaxItemCount?: number;

  /**
   * Name of the parameter with an invalid value.
   */
  parameterName?: string;

  /**
   * Format: int32
   */
  parameterValueLength?: number;

  /**
   */
  parameterRange?: string;
}

export default ClientErrorsResponseErrors;
