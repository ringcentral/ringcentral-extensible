/**
 * Information on an answering rule that the greeting is applied to
*/
interface CustomGreetingAnsweringRuleInfo {
  /**
   * Canonical URI of an answering rule
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of an answering rule
   */
  id?: string;
}

export default CustomGreetingAnsweringRuleInfo;
