import {ActionAdaptiveCardInfo} from './index';

class AdaptiveCardAction {
  /**
   */
  type?:
    | 'Action.ShowCard'
    | 'Action.Submit'
    | 'Action.OpenUrl'
    | 'Action.ToggleVisibility';

  /**
   */
  title?: string;

  /**
   */
  card?: ActionAdaptiveCardInfo;

  /**
   */
  url?: string;
}
export default AdaptiveCardAction;
