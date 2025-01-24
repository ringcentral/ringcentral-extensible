import type AdaptiveCardCreator from "./AdaptiveCardCreator";
import type AdaptiveCardInfoRequest from "./AdaptiveCardInfoRequest";
import type AdaptiveCardAction from "./AdaptiveCardAction";
import type AdaptiveCardSelectAction from "./AdaptiveCardSelectAction";
import type BackgroundImage from "./BackgroundImage";

interface AdaptiveCardInfo {
  /**
   * Internal identifier of an adaptive card
   */
  id?: string;

  /**
   * Adaptive Card creation datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Post last modification datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   * Schema of an adaptive card
   * Format: uri
   */
  $schema?: string;

  /** */
  type?: "AdaptiveCard";

  /**
   * Version of an adaptive card
   */
  version?: string;

  /** */
  creator?: AdaptiveCardCreator;

  /**
   * Chat IDs where an adaptive card is posted or shared.
   */
  chatIds?: string[];

  /**
   * List of card elements to show in the primary card region
   */
  body?: AdaptiveCardInfoRequest[];

  /** */
  actions?: AdaptiveCardAction[];

  /** */
  selectAction?: AdaptiveCardSelectAction;

  /**
   * Text shown when the client doesn't support the version specified (may contain markdown)
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
  lang?: "en" | "fr" | "es";

  /**
   * Defines how the content should be aligned vertically within the container. Only relevant for fixed-height cards, or cards with a `minHeight` specified
   */
  verticalContentAlignment?: "top" | "center" | "bottom";
}

export default AdaptiveCardInfo;
