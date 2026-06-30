/**
 * Query parameters for operation mthListNotes
 */
interface MthListNotesParameters {
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
   * List of thread IDs to filter the list of results
   */
  threadIds?: string[];

  /**
   * List of note IDs to filter the list of results
   */
  noteIds?: string[];

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

export default MthListNotesParameters;
