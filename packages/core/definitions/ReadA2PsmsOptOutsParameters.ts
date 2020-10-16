class ReadA2PsmsOptOutsParameters {
  /**
   * The sender's phone number (`from` field) in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format for filtering messages
   */
  from?: string;

  /**
   * The reciever's phone number (`to` field) in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format for filtering messages
   */
  to?: string;

  /**
   * Token of the page to be retrieved
   */
  pageToken?: string;

  /**
   * Number of records to be returned for the page
   * Default: 1000
   */
  perPage?: number;
}

export default ReadA2PsmsOptOutsParameters;
