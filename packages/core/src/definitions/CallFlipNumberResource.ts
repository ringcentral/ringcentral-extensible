interface CallFlipNumberResource {
  /**
   * Internal identifier of a call flip number
   * Example: 409926525004
   */
  id?: string;

  /**
   * Flip number in E.164 format with '+'
   * Example: +16502096935
   */
  phoneNumber?: string;

  /**
   * Flip number type
   * Example: PhoneLine
   */
  type?: 'PhoneLine' | 'External';

  /**
   * Flip number label, device name for Digital Line case
   * Example: My Mobile Number
   */
  label?: string;

  /**
   * Speed dial/flip number, the range is 1-8
   * Example: 5
   */
  flipNumber?: string;
}

export default CallFlipNumberResource;
