/**
 * Operator extension information. This extension will receive
 * all calls and messages addressed to an operator.
 *
 */
interface AccountOperatorInfo {
  /**
   * Link to an operator extension resource
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of an operator extension
   * Format: int64
   */
  id?: number;

  /**
   * Number of an operator extension
   */
  extensionNumber?: string;
}

export default AccountOperatorInfo;
