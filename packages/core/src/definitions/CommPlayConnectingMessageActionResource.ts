import CommGreetingResource from "./CommGreetingResource.js";

/**
 * Action information
 */
interface CommPlayConnectingMessageActionResource {
  /**
   * Required
   * Example: PlayConnectingMessageAction
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
   * Required
   */
  greeting?: CommGreetingResource;

  /**
   * Specifies if an action is enabled
   * Required
   */
  enabled?: boolean;
}

export default CommPlayConnectingMessageActionResource;
