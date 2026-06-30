/**
 * Query parameters for operation mthListMessages
 */
interface MthListMessagesParameters {
  /**
   * Thread status
   */
  threadStatus?: "Open" | "Resolved";

  /**
   * Thread owner extension IDs
   */
  ownerExtensionIds?: string[];

  /**
   * Availability filter (by default only `Alive` records are returned)
   * Default: Alive
   */
  availability?: ("Alive" | "Deleted")[];

  /**
   * Message IDs to filter the list of results
   */
  messageIds?: string[];

  /**
   * Thread ID(s) to filter messages
   */
  threadIds?: string[];

  /**
   * Start date/time for resulting message threads or messages (depending on path resource)
   *  in [RFC-3339](https://datatracker.ietf.org/doc/html/rfc3339) format including timezone.
   *  This parameter is supported if `creationTimeTo` is specified
   */
  creationTimeFrom?: string;

  /**
   * End date/time for resulting message threads or messages (depending on path resource)
   *  in [RFC-3339](https://datatracker.ietf.org/doc/html/rfc3339) format including timezone.
   *  This parameter is supported if `creationTimeFrom` is specified
   */
  creationTimeTo?: string;

  /**
   * The number of items per page. If the provided value in the request
   *  is greater than a maximum, the maximum value is applied
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 100
   * Default: 100
   */
  perPage?: number;

  /**
   * The result set page number (1-indexed) to return
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 1
   * Default: 1
   */
  page?: number;
}

export default MthListMessagesParameters;
