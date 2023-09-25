import type ForwardingNumberInfoRulesCreateRuleRequest from './ForwardingNumberInfoRulesCreateRuleRequest';

interface ForwardingRuleCreateRequest {
  /**
   * Forwarding number (or group) ordinal. Not returned for inactive numbers
   * Format: int32
   */
  index?: number;

  /**
   * Number of rings for a forwarding number (or group). For inactive
   *  numbers the default value ('4') is returned
   * Format: int32
   */
  ringCount?: number;

  /**
   * Phone number status
   */
  enabled?: boolean;

  /**
   * Forwarding number (or group) data
   */
  forwardingNumbers?: ForwardingNumberInfoRulesCreateRuleRequest[];
}

export default ForwardingRuleCreateRequest;
