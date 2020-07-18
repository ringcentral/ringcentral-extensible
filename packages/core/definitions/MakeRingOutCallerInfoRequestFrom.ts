class MakeRingOutCallerInfoRequestFrom {
  /**
   * Phone number in E.164 format
   */
  phoneNumber?: string;

  /**
   * Internal identifier of a forwarding number; returned in response as an 'id' field value. Can be specified instead of the phoneNumber attribute
   */
  forwardingNumberId?: string;
}

export default MakeRingOutCallerInfoRequestFrom;
