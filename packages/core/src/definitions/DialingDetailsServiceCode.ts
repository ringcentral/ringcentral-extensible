interface DialingDetailsServiceCode {
  /**
   * Example: *811
   */
  dialing?: string;

  /**
   * Absent if the response's attribute `results.originalString` value doesn't contain a valid RingCentral's service code.
   * Example: *8xx
   */
  pattern?: string;
}

export default DialingDetailsServiceCode;
