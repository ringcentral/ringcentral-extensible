/**
 * Notification payload body
 */
interface ExtensionFavoritesEventBody {
  /**
   * Internal identifier of an extension
   */
  extensionId?: string;

  /**
   * Internal identifier of a subscription owner extension
   */
  ownerId?: string;
}

export default ExtensionFavoritesEventBody;
