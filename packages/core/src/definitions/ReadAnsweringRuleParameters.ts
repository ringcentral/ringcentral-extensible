/**
 * Query parameters for operation readAnsweringRule
 */
interface ReadAnsweringRuleParameters {
  /**
   * Indicates whether inactive numbers should be returned or not
   */
  showInactiveNumbers?: boolean;

  /**
   * If true, internal identifiers are returned in the response
   */
  internalIds?: boolean;
}

export default ReadAnsweringRuleParameters;
