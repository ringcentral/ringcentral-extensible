/**
 * Query parameters for operation listVideoMeetings
*/
interface ListVideoMeetingsParameters {
  /**
   * Search text
   */
  text?: string;

  /**
   * Token to get the next page
   */
  pageToken?: string;

  /**
   * Number of records returned
   * Format: int32
   */
  perPage?: number;

  /**
   * Type of returned data
   */
  type?: ('All' | 'My' | 'Deleted' | 'Shared');
}

export default ListVideoMeetingsParameters;
