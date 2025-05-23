import CalledNumberInfo from "./CalledNumberInfo.js";
import CompanyAnsweringRuleExtensionInfo from "./CompanyAnsweringRuleExtensionInfo.js";

interface ListCompanyAnsweringRuleInfo {
  /**
   * Internal identifier of an answering rule
   */
  id?: string;

  /**
   * Canonical URI of an answering rule
   * Format: uri
   */
  uri?: string;

  /**
   * Specifies if the rule is active or inactive. The default value is `true`
   * Default: true
   */
  enabled?: boolean;

  /**
   * Type of an answering rule
   * Default: Custom
   */
  type?: "BusinessHours" | "AfterHours" | "Custom";

  /**
   * Name of an answering rule specified by user. Max number of symbols is 30. The default value is 'My Rule N' where 'N' is the first free number
   */
  name?: string;

  /**
   * Answering rules are applied when calling to selected number(s)
   */
  calledNumbers?: CalledNumberInfo[];

  /** */
  extension?: CompanyAnsweringRuleExtensionInfo;
}

export default ListCompanyAnsweringRuleInfo;
