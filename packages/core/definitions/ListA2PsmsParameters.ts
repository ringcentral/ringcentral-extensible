class ListA2PsmsParameters {
  /**
   * Internal identifier of a message batch used for filtering records
   */
  batchId?: string;

  /**
   * Token of a page to be retrieved
   */
  pageToken?: string;

  /**
   * Number of messages to be returned per request
   * Default: 1000
   */
  perPage?: number;
}

export default ListA2PsmsParameters;
