import type ActionAdaptiveCardInfo from './ActionAdaptiveCardInfo';

interface AdaptiveCardAction {
  /**
   */
  type?: 'Action.ShowCard' | 'Action.Submit' | 'Action.OpenUrl' | 'Action.ToggleVisibility';

  /**
   */
  title?: string;

  /**
   */
  card?: ActionAdaptiveCardInfo;

  /**
   * Format: uri
   */
  url?: string;
}

export default AdaptiveCardAction;
