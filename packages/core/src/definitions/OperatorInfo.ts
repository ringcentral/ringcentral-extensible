/**
 * Site Fax/SMS recipient (operator) reference. Multi-level IVR should
 * be enabled
 *
*/
interface OperatorInfo {
  /**
   * Internal identifier of an operator
   */
  id?: string;

  /**
   * Link to an operator resource
   * Format: uri
   */
  uri?: string;

  /**
   * Extension number (pin)
   */
  extensionNumber?: string;

  /**
   * Operator extension user full name
   */
  name?: string;
}

export default OperatorInfo;
