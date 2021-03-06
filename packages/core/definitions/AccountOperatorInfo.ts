// Operator's extension information. This extension will receive all calls and messages intended for the operator.
class AccountOperatorInfo {
  /**
   * Link to an operator extension resource
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
