/**
 * Action information
 */
interface CommScreeningActionRequest {
  /**
   * Action type
   * Required
   * Example: ScreeningAction
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
   * Screening type
   * Required
   */
  screening?: "NoCallerId" | "UnknownCallerId" | "Always";

  /**
   * Specifies if an action is enabled
   * Required
   */
  enabled?: boolean;

  /** */
  screeningResult?: "AskToAnswer" | "PlayCallerNameOnly";
}

export default CommScreeningActionRequest;
