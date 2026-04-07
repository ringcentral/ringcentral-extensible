import CommGreetingResource from "./CommGreetingResource.js";

/**
 * Action information
*/
interface CommPlayWelcomePromptActionRequest {
    /**
   * Prompt action type
   * Required
   * Example: PlayWelcomePromptAction
   */
  type?: ('PlayConnectingMessageAction' | 'PlayConnectingPromptAction' | 'PlayWelcomePromptAction' | 'ScreeningAction' | 'RingGroupAction' | 'RingAlwaysGroupAction' | 'TerminatingAction');

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

export default CommPlayWelcomePromptActionRequest;
