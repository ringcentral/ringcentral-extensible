import CommGreetingResource from "./CommGreetingResource.js";
import CommDispatchingRequestActionsTargets from "./CommDispatchingRequestActionsTargets.js";

interface CommDispatchingRequestActions {
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
  targets?: CommDispatchingRequestActionsTargets[];

  /**
   * Custom start time. Applicable for 'Custom' dispatching type
   * Format: int32
   * Example: 5
   */
  customStartOffset?: number;

  /**
   * Duration of calling
   * Format: int32
   * Example: 5
   */
  duration?: number;

  /**
   * Example: VoiceMailTerminatingTarget
   */
  ringingTargetType?: string;

  /**
   * Example: VoiceMailTerminatingTarget
   */
  terminatingTargetType?: string;
}

export default CommDispatchingRequestActions;
