import CommRingAlwaysGroupActionRequestTargets from "./CommRingAlwaysGroupActionRequestTargets.js";

/**
 * Action information
 */
interface CommRingAlwaysGroupActionRequest {
  /**
   * Required
   * Example: RingAlwaysGroupAction
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
   * Target information
   * Required
   */
  targets?: CommRingAlwaysGroupActionRequestTargets[];
}

export default CommRingAlwaysGroupActionRequest;
