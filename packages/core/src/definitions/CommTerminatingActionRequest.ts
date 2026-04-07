import CommTerminatingActionRequestTargets from "./CommTerminatingActionRequestTargets.js";

/**
 * Action information
 */
interface CommTerminatingActionRequest {
  /**
   * Action type
   * Required
   * Example: TerminatingAction
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
   * Action information
   * Required
   */
  targets?: CommTerminatingActionRequestTargets[];

  /**
   * Example: VoiceMailTerminatingTarget
   */
  ringingTargetType?: string;

  /**
   * Example: VoiceMailTerminatingTarget
   */
  terminatingTargetType?: string;
}

export default CommTerminatingActionRequest;
