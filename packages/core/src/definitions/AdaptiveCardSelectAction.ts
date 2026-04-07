/**
 * An action that will be invoked when the card is tapped or selected. `Action.ShowCard` is not supported
 */
interface AdaptiveCardSelectAction {
  /**
   * Required
   */
  type?: "Action.Submit" | "Action.OpenUrl" | "Action.ToggleVisibility";
}

export default AdaptiveCardSelectAction;
