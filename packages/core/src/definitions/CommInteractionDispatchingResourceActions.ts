import CommGreetingResource from "./CommGreetingResource.js";
import CommInteractionDispatchingResourceActionsTargets from "./CommInteractionDispatchingResourceActionsTargets.js";

interface CommInteractionDispatchingResourceActions {
  /**
   * Action type
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

  /** */
  greeting?: CommGreetingResource;

  /**
   * Specifies if an action is enabled
   */
  enabled?: boolean;

  /**
   * Screening type
   */
  screening?: "NoCallerId" | "UnknownCallerId" | "Always";

  /** */
  screeningResult?: "AskToAnswer" | "PlayCallerNameOnly";

  /**
   * Action information
   */
  targets?: CommInteractionDispatchingResourceActionsTargets[];

  /**
   * Custom start time in seconds. Applicable for 'Custom' dispatching type
   * Format: int32
   * Example: 5
   */
  customStartOffset?: number;

  /**
   * Duration of calling in seconds
   * Format: int32
   * Example: 5
   */
  duration?: number;

  /**
   * Terminating target type
   */
  ringingTargetType?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget"
    | "ImsVoiceMailTerminatingTarget";

  /**
   * Terminating target type
   */
  terminatingTargetType?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget"
    | "ImsVoiceMailTerminatingTarget";
}

export default CommInteractionDispatchingResourceActions;
