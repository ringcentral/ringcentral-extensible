interface AccountHistorySearchPublicRequest {
  /**
   * The beginning of the time range to return records in ISO 8601 format in UTC timezone, default is "eventTimeFrom"-24 hours
   * Format: date-time
   */
  eventTimeFrom?: string;

  /**
   * The end of the time range to return records in ISO 8601 format in UTC timezone, default is the current time
   * Format: date-time
   */
  eventTimeTo?: string;

  /**
   * List of extension IDs of change initiators.
   */
  initiatorIds?: string[];

  /**
   * Page number in the result set
   * Format: int32
   * Example: 1
   */
  page?: number;

  /**
   * Number of records to be returned per page.
   * Format: int32
   * Example: 25
   */
  perPage?: number;

  /**
   * List of extension (user) IDs affected by this action.
   * Example: 404611540004
   */
  targetIds?: string[];

  /**
   * Site ID to apply as a filter
   * Example: 871836004
   */
  siteId?: string;

  /**
   * List of action IDs (exact keys) to search for (alternatively "excludeActionIds" option can be used).
   * Example: CHANGE_SECRET_INFO,CHANGE_USER_INFO
   */
  actionIds?: ('CHANGE_SECRET_INFO' | 'CHANGE_USER_INFO')[];

  /**
   * The (sub)string to search, applied to the following fields:
   *
   *  - initiator.name
   *  - initiator.role
   *  - initiator.extensionNumber
   *  - target.name
   *  - target.extensionNumber
   *  - details.parameters.value
   * Example: 542617
   */
  searchString?: string;

  /**
   * List of action IDs (exact keys) to exclude from your search (alternatively "actionIds" option can be used).
   * Example: CHANGE_SECRET_INFO,CHANGE_USER_INFO
   */
  excludeActionIds?: ('CHANGE_SECRET_INFO' | 'CHANGE_USER_INFO')[];
}

export default AccountHistorySearchPublicRequest;
