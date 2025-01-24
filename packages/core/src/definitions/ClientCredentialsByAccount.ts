/**
 * Token endpoint request parameters used in the "Client Credentials" authorization flow
 * with the `client_credentials` grant type
 */
interface ClientCredentialsByAccount {
  /**
   * Grant type
   * Required
   */
  grant_type?: "client_credentials";

  /**
   * RingCentral internal account ID
   * Required
   */
  account_id?: string;
}

export default ClientCredentialsByAccount;
