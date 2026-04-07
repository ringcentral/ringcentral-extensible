import CommRingAlwaysGroupActionResourceTargets from "./CommRingAlwaysGroupActionResourceTargets.js";

/**
 * Action information
 */
interface CommRingAlwaysGroupActionResource {
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
   * Required
   */
  targets?: CommRingAlwaysGroupActionResourceTargets[];
}

export default CommRingAlwaysGroupActionResource;
