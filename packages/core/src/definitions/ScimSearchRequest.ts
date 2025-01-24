interface ScimSearchRequest {
  /**
   * Page size
   * Format: int32
   */
  count?: number;

  /**
   * Only support 'userName' or 'email' filter expressions for now
   */
  filter?: string;

  /** */
  schemas?: "urn:ietf:params:scim:api:messages:2.0:SearchRequest"[];

  /**
   * Start index (1-based)
   * Format: int32
   */
  startIndex?: number;
}

export default ScimSearchRequest;
