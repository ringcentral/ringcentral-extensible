interface SearchSmsConsentRecordsRequest {
  /**
   * The internal party's phone number(s) used to filter records
   *  (if requested `coverage` is `PhoneNumber` or `Account`)
   */
  from?: string[];

  /**
   * The external party's phone number(s) used to filter records
   */
  to?: string[];

  /**
   * Consent status of a recipient's phone number:
   *  - `OptOut` - The number is opted out of receiving SMS.
   *  - `OptIn` - The number is opted in to receiving SMS (if it was previously opted out).
   * Example: OptOut
   */
  optStatus?: "OptOut" | "OptIn";

  /**
   * The coverage(s) used to filter records
   */
  coverage?: ("PhoneNumber" | "Account" | "CampaignType")[];

  /**
   * The campaign type(s) used to filter records
   *  (if requested `coverage` is `CampaignType`)
   */
  campaignType?: ("Conversational" | "Informational" | "Promotional")[];

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
   * Default: 100
   */
  perPage?: number;
}

export default SearchSmsConsentRecordsRequest;
