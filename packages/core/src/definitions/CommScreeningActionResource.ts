/**
 * Action information
 */
interface CommScreeningActionResource {
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
   */
  enabled?: boolean;

  /**
   * Required
   */
  screeningResult?: "AskToAnswer" | "PlayCallerNameOnly";
}

export default CommScreeningActionResource;
