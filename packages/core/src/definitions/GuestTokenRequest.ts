/**
 * Token endpoint request parameters used in the "Guest" authorization flow
 * with the `guest` grant type
 *
 */
interface GuestTokenRequest {
  /**
   * Grant type
   * Required
   */
  grant_type?: 'guest';

  /**
   * RingCentral Brand identifier.
   */
  brand_id?: string;

  /**
   * Resource type for the guest access.
   * Required
   */
  resource_type?: string;

  /**
   * Resource URL for the guest access.
   * Required
   */
  resource?: string;
}

export default GuestTokenRequest;
