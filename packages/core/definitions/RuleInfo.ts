import {CreateAnsweringRuleForwardingNumberInfo} from '.';

class RuleInfo {
  /**
   * Forwarding number (or group) ordinal
   */
  index?: number;

  /**
   * Number of rings for a forwarding number (or group)
   */
  ringCount?: number;

  /**
   * Forwarding number status. Returned only if `showInactiveNumbers` is set to `true`
   */
  enabled?: boolean;

  /**
   * Forwarding number (or group) data
   */
  forwardingNumbers?: CreateAnsweringRuleForwardingNumberInfo[];
}

export default RuleInfo;
