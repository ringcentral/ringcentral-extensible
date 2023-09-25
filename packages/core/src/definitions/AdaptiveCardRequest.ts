import type AdaptiveCardInfoRequest from './AdaptiveCardInfoRequest';
import type AdaptiveCardAction from './AdaptiveCardAction';
import type AdaptiveCardSelectAction from './AdaptiveCardSelectAction';
import type BackgroundImage from './BackgroundImage';

interface AdaptiveCardRequest {
  /**
   * Type of attachment. This field is mandatory and filled on server side -
   *  will be ignored if set in request body
   * Required
   */
  type?: 'AdaptiveCard';

  /**
   * Version. This field is mandatory and filled on server side -
   *  will be ignored if set in request body
   * Required
   */
  version?: string;

  /**
   * List of adaptive cards with the detailed information
   */
  body?: AdaptiveCardInfoRequest[];

  /**
   */
  actions?: AdaptiveCardAction[];

  /**
   */
  selectAction?: AdaptiveCardSelectAction;

  /**
   */
  fallbackText?: string;

  /**
   * Specifies a background image oa a card. Acceptable formats are PNG, JPEG, and GIF
   */
  backgroundImage?: BackgroundImage;

  /**
   * Specifies the minimum height of the card in pixels
   * Example: 50px
   */
  minHeight?: string;

  /**
   * Specifies what should be spoken for this entire card. This is simple text or SSML fragment
   */
  speak?: string;

  /**
   * The 2-letter ISO-639-1 language used in the card. Used to localize any date/time functions
   */
  lang?: 'en' | 'fr' | 'es';

  /**
   * Defines how the content should be aligned vertically within the container. Only relevant for fixed-height cards, or cards with a `minHeight` specified
   */
  verticalContentAlignment?: 'top' | 'center' | 'bottom';
}

export default AdaptiveCardRequest;
