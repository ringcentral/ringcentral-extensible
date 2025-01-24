interface ScimErrorResponse {
  /**
   * Detailed error message
   */
  detail?: string;

  /** */
  schemas?: "urn:ietf:params:scim:api:messages:2.0:Error"[];

  /**
   * Bad request type when status code is 400
   */
  scimType?:
    | "uniqueness"
    | "tooMany"
    | "mutability"
    | "sensitive"
    | "invalidSyntax"
    | "invalidFilter"
    | "invalidPath"
    | "invalidValue"
    | "invalidVers"
    | "noTarget";

  /**
   * Same as HTTP status code, e.g. 400, 401, etc.
   */
  status?: string;
}

export default ScimErrorResponse;
