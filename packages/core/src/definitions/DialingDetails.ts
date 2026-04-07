import DialingDetailsServiceCode from "./DialingDetailsServiceCode.js";
import DialingDetailsSpecialPrefix from "./DialingDetailsSpecialPrefix.js";

/**
 * Absent if the request's parameter `resultContent.includeDialingDetails` value is set to `false`.
*/
interface DialingDetails {
    /**
   * Absent if the response's attribute `results.originalString` value doesn't contain a service code.
   */
  serviceCode?: DialingDetailsServiceCode;

  /**
   * Absent if the response's attribute `results.originalString` value doesn't contain an outbound call prefix.
   * Example: 9
   */
  outboundCallPrefix?: string;

  /**
   * Absent if the response's attribute `results.originalString` value doesn't contain a special prefix.
   */
  specialPrefix?: DialingDetailsSpecialPrefix;
}

export default DialingDetails;
