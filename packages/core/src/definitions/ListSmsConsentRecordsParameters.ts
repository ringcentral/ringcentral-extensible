/**
 * Query parameters for operation listSmsConsentRecords
 */
interface ListSmsConsentRecordsParameters {
  /**
   * The token indicating the particular page of the result set to be retrieved.
   *  If omitted the first page will be returned.
   */
  pageToken?: string;

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
   * The sender's phone number(s) used to filter records
   */
  from?: string[];

  /**
   * The recipient's phone number(s) used to filter records
   */
  to?: string[];

  /**
   * The opt-out/opt-in status to filter records by. If omitted, `OptOut` records are returned
   * Default: OptOut
   */
  optStatus?: ("OptOut" | "OptIn")[];
}

export default ListSmsConsentRecordsParameters;
