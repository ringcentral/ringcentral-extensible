// Query parameters for operation readA2PSMSOptOuts
class ReadA2PSMSOptOutsParameters {
  /**
   * The sender's phone number (`from` field) in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format for filtering messages
   * Example: 15551234455
   */
  from?: string;

  /**
   * The reciever's phone number (`to` field) in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format for filtering messages
   * Example: 15551237755
   */
  to?: string;

  /**
   * Token of the page to be retrieved
   */
  pageToken?: string;

  /**
   * Number of records to be returned for the page
   * Format: int64
   * Example: 5
   * Default: 1000
   */
  perPage?: number;
}
export default ReadA2PSMSOptOutsParameters;
