/**
 * Token endpoint request parameters used in the "Personal JWT", "JWT Bearer" and "Partner JWT" authorization flows
 * with the `urn:ietf:params:oauth:grant-type:jwt-bearer` and `partner_jwt` grant types
 */
interface JwtTokenRequest {
  /**
   * Grant type
   * Required
   */
  grant_type?: "urn:ietf:params:oauth:grant-type:jwt-bearer" | "partner_jwt";

  /**
   * For `urn:ietf:params:oauth:grant-type:jwt-bearer` or `partner_jwt` grant types only.
   *  Authorization grant assertion (JWT)
   *  as defined by [RFC-7523](https://datatracker.ietf.org/doc/html/rfc7523#section-2.1).
   * Required
   */
  assertion?: string;
}

export default JwtTokenRequest;
