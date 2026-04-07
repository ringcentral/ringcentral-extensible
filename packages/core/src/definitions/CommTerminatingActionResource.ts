import CommTerminatingActionResourceTargets from "./CommTerminatingActionResourceTargets.js";

/**
 * Action information
 */
interface CommTerminatingActionResource {
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
  targets?: CommTerminatingActionResourceTargets[];

  /**
   * Terminating target type
   */
  ringingTargetType?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget";

  /**
   * Terminating target type
   */
  terminatingTargetType?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget";
}

export default CommTerminatingActionResource;
