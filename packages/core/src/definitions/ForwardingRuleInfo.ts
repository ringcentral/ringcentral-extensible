import CreateAnsweringRuleForwardingNumberInfo from "./CreateAnsweringRuleForwardingNumberInfo.js";

interface ForwardingRuleInfo {
  /**
   * Forwarding number (or group) ordinal
   * Format: int32
   */
  index?: number;

  /**
   * Number of rings for a forwarding number (or group)
   * Format: int32
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

export default ForwardingRuleInfo;
