/**
 * Token endpoint request parameters used in the "Client Credentials" authorization flow
 * with the `client_credentials` grant type
 */
interface ClientCredentialsTokenRequest {
  /**
   * Grant type
   * Required
   */
  grant_type?: "client_credentials";

  /**
   * RingCentral Brand identifier
   * Required
   */
  brand_id?: string;

  /**
   * RingCentral internal account ID
   * Required
   */
  account_id?: string;

  /**
   * The ID of the account on RingCentral partner's side
   * Required
   */
  partner_account_id?: string;
}

export default ClientCredentialsTokenRequest;
