class AccountHistorySearchPublicRequest {
  /**
   * UTC formatted datetime (RFC3339)
 *
 *  2019-10-12T07:20:50.52Z
 *
 *  Default: current time
   * Format: date-time
   */
  eventTimeFrom?: string;

  /**
   * UTC formatted datetime (RFC3339)
 *
 *  2019-10-12T07:20:50.52Z
 *
 *  Default: dateFrom + 24h
   * Format: date-time
   */
  eventTimeTo?: string;

  /**
   * List of extension IDs who is the user of changes.
   */
  initiatorIds?: string[];

  /**
   * Page number of the page you want to jump to.
   * Example: 1
   */
  page?: number;

  /**
   * Number of records returned per page.
   * Example: 25
   */
  perPage?: number;

  /**
   * List of extension IDs (users) affected by this action.
   * Example: 404611540004
   */
  targetIds?: string[];

  /**
   * A filter to apply by site ID
   * Example: 871836004
   */
  siteId?: string;

  /**
   * List of action IDs (exact keys) to search for. Or you can use the excludeActionIds option.
   * Example: CHANGE_SECRET_INFO
   */
  actionIds?: ('CHANGE_SECRET_INFO' | 'CHANGE_USER_INFO')[];

  /**
   * List of fields to apply search on:
 *
 *  initiator.name
 *  initiator.role
 *  initiator.extensionNumber
 *  target.name
 *  target.extensionNumber
 *  details.parameters.value
   * Example: 542617
   */
  searchString?: string;

  /**
   * List of action IDs (exact keys) to exclude from your search. Or you can use the actionIds option.
   * Example: CHANGE_SECRET_INFO
   */
  excludeActionIds?: ('CHANGE_SECRET_INFO' | 'CHANGE_USER_INFO')[];
}
export default AccountHistorySearchPublicRequest;
