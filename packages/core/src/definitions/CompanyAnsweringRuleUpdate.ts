import CompanyAnsweringRuleCallersInfoRequest from "./CompanyAnsweringRuleCallersInfoRequest.js";
import CompanyAnsweringRuleCalledNumberInfo from "./CompanyAnsweringRuleCalledNumberInfo.js";
import CompanyAnsweringRuleScheduleInfoRequest from "./CompanyAnsweringRuleScheduleInfoRequest.js";
import GreetingInfo from "./GreetingInfo.js";

interface CompanyAnsweringRuleUpdate {
  /**
   * Identifier of an answering rule
   */
  id?: string;

  /**
   * Specifies if a rule is active or inactive. The default value is `true`
   * Default: true
   */
  enabled?: boolean;

  /**
   * Name of an answering rule specified by user. Max number of
   *  symbols is 30. The default value is 'My Rule N' where 'N' is the first
   *  free number
   */
  name?: string;

  /**
   * Answering rule will be applied when calls are received from
   *  the specified caller(s)
   */
  callers?: CompanyAnsweringRuleCallersInfoRequest[];

  /**
   * Answering rule will be applied when calling the specified number(s)
   */
  calledNumbers?: CompanyAnsweringRuleCalledNumberInfo[];

  /** */
  schedule?: CompanyAnsweringRuleScheduleInfoRequest;

  /**
   * Specifies how incoming calls are forwarded. The default value is 'Operator' 'Operator' - play company greeting and forward to operator extension 'Disconnect' - play company greeting and disconnect 'Bypass' - bypass greeting to go to selected extension = ['Operator', 'Disconnect','Bypass']
   */
  callHandlingAction?: "Operator" | "Disconnect" | "Bypass";

  /**
   * Type of an answering rule
   * Default: Custom
   */
  type?: "BusinessHours" | "AfterHours" | "Custom";

  /** */
  extension?: CompanyAnsweringRuleCallersInfoRequest;

  /**
   * Greetings applied for an answering rule; only predefined greetings
   *  can be applied, see Dictionary Greeting List
   */
  greetings?: GreetingInfo[];
}

export default CompanyAnsweringRuleUpdate;
