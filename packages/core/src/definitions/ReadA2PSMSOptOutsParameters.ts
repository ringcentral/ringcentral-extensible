/**
 * Query parameters for operation readA2PSMSOptOuts
 */
interface ReadA2PSMSOptOutsParameters {
  /**
   * The sender's phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format for filtering messages.
   *  The asterisk value "*" means any number in `from` field
   * Example: 15551234455
   */
  from?: string;

  /**
   * The receiver's phone number (`to` field) in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format for filtering messages
   * Example: 15551237755
   */
  to?: string;

  /**
   * The status (opted out, opted in, or both) to be used as the filter
   * Example: optout
   * Default: optout
   */
  status?: "optout" | "optin" | "all";

  /**
   * The page token of the page to be retrieved
   * Example: pgt1
   */
  pageToken?: string;

  /**
   * The number of records to be returned for the page
   * Format: int32
   * Example: 5
   * Default: 1000
   */
  perPage?: number;
}

export default ReadA2PSMSOptOutsParameters;
