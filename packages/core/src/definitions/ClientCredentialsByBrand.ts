/**
 * Token endpoint request parameters used in the "Client Credentials" authorization flow with the `client_credentials` grant type
 */
interface ClientCredentialsByBrand {
  /**
   * Grant type
   */
  grant_type?: 'client_credentials';

  /**
   * RingCentral Brand identifier
   * Required
   */
  brand_id?: string;
}

export default ClientCredentialsByBrand;
