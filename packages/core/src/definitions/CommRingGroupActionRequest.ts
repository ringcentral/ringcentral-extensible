import CommRingGroupActionRequestTargets from "./CommRingGroupActionRequestTargets.js";

/**
 * Action information
 */
interface CommRingGroupActionRequest {
  /**
   * Action type
   * Required
   * Example: RingGroupAction
   */
  type?:
    | "PlayConnectingMessageAction"
    | "PlayConnectingPromptAction"
    | "PlayWelcomePromptAction"
    | "ScreeningAction"
    | "RingGroupAction"
    | "RingAlwaysGroupAction"
    | "TerminatingAction";

  /**
   * Specifies if an action is enabled
   * Required
   */
  enabled?: boolean;

  /**
   * Required
   */
  targets?: CommRingGroupActionRequestTargets[];

  /**
   * Custom start time. Applicable for 'Custom' dispatching type
   * Format: int32
   * Example: 5
   */
  customStartOffset?: number;

  /**
   * Duration of calling
   * Required
   * Format: int32
   * Example: 5
   */
  duration?: number;
}

export default CommRingGroupActionRequest;
