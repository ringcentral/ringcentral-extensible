import ScimUserShortInfo from "./ScimUserShortInfo.js";

interface ScimUserSearchResponse {
  /**
   * User list
   */
  Resources?: ScimUserShortInfo[];

  /**
   * Format: int64
   */
  itemsPerPage?: number;

  /** */
  schemas?: ("urn:ietf:params:scim:api:messages:2.0:ListResponse")[];

  /**
   * Format: int64
   */
  startIndex?: number;

  /**
   * Format: int64
   */
  totalResults?: number;
}

export default ScimUserSearchResponse;
