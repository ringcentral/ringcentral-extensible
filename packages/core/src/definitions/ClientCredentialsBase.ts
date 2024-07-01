/**
 * Token endpoint request parameters used in the "Client Credentials" authorization flow with the `client_credentials` grant type
 */
interface ClientCredentialsBase {
  /**
   * Grant type
   */
  grant_type?: 'client_credentials';
}

export default ClientCredentialsBase;
