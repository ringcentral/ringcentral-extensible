/**
 * Token endpoint request parameters used in the "Client Credentials" authorization flow with the `client_credentials` grant type
 */
interface ClientCredentialsByPartnerAccount {
  /**
   * Grant type
   */
  grant_type?: 'client_credentials';

  /**
   * RingCentral Brand identifier
   * Required
   */
  brand_id?: string;

  /**
   * The ID of the account on RingCentral partner's side
   * Required
   */
  partner_account_id?: string;
}

export default ClientCredentialsByPartnerAccount;
