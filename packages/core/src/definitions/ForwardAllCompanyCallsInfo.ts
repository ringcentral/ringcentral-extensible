import type RangesInfo from "./RangesInfo";
import type ExtensionShortInfoResource from "./ExtensionShortInfoResource";
import type ForwardAllCallsReason from "./ForwardAllCallsReason";

interface ForwardAllCompanyCallsInfo {
  /**
   * Indicates whether the *Forward All Company Calls* feature is enabled or disabled for an account
   */
  enabled?: boolean;

  /**
   * Specific data ranges. If specified, weeklyRanges cannot be specified
   */
  ranges?: RangesInfo[];

  /**
   * Specifies how incoming calls are forwarded. The default value
   *  is 'Operator' 'Operator' - play company greeting and forward to operator
   *  extension 'Disconnect' - play company greeting and disconnect 'Bypass'
   *  - bypass greeting to go to selected extension = ['Operator', 'Disconnect',
   *  'Bypass']
   */
  callHandlingAction?: "Operator" | "Disconnect" | "Bypass";

  /** */
  extension?: ExtensionShortInfoResource;

  /** */
  reason?: ForwardAllCallsReason;
}

export default ForwardAllCompanyCallsInfo;
