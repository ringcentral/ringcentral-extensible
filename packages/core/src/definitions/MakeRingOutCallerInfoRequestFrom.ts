/**
 * Phone number of a caller. This number corresponds to the 1st
 * leg of a RingOut call. This number can be one of the user's configured forwarding
 * numbers or an arbitrary number
 *
 */
interface MakeRingOutCallerInfoRequestFrom {
  /**
   * Phone number in E.164 format
   */
  phoneNumber?: string;

  /**
   * Internal identifier of a forwarding number; returned in response
   *  as an 'id' field value. Can be specified instead of a `phoneNumber` attribute
   */
  forwardingNumberId?: string;
}

export default MakeRingOutCallerInfoRequestFrom;
