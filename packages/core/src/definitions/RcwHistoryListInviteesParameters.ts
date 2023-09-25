/**
 * Query parameters for operation rcwHistoryListInvitees
 */
interface RcwHistoryListInviteesParameters {
  /**
   * The role of the invitee/participant.
   */
  role?: ('Panelist' | 'CoHost' | 'Host' | 'Attendee')[];

  /**
   * The original role of the invitee/participant.
   */
  originalRole?: ('Panelist' | 'CoHost' | 'Host' | 'Attendee')[];

  /**
   * The number of items per page. If provided value in the request
   *  is greater than a maximum, the maximum value is applied
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 100
   * Default: 100
   */
  perPage?: number;

  /**
   * The token indicating the particular page of the result set to be retrieved.
   *  If omitted the first page will be returned.
   */
  pageToken?: string;
}

export default RcwHistoryListInviteesParameters;
