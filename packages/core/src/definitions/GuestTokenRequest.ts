/**
 * Token endpoint request parameters used in the "Guest" authorization flow with the `guest` grant type
 */
interface GuestTokenRequest {
  /**
   * Grant type
   */
  grant_type?: 'guest';

  /**
   * RingCentral Brand identifier.
   */
  brand_id?: string;

  /**
   * Resource type for the guest access.
   */
  resource_type?: string;

  /**
   * Resource URL for the guest access.
   */
  resource?: string;
}

export default GuestTokenRequest;
