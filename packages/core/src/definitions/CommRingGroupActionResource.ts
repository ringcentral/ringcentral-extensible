import CommRingGroupActionResourceTargets from "./CommRingGroupActionResourceTargets.js";

/**
 * Action information
 */
interface CommRingGroupActionResource {
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
   * Target information
   * Required
   */
  targets?: CommRingGroupActionResourceTargets[];

  /**
   * Custom start time in seconds. Applicable for 'Custom' dispatching type
   * Format: int32
   * Example: 5
   */
  customStartOffset?: number;

  /**
   * Duration of calling in seconds
   * Required
   * Format: int32
   * Example: 5
   */
  duration?: number;
}

export default CommRingGroupActionResource;
