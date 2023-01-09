interface ForwardingNumberResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  id?: string;

  /**
   */
  phoneNumber?: string;

  /**
   */
  label?: string;

  /**
   */
  features?: ('CallFlip' | 'CallForwarding')[];

  /**
   */
  flipNumber?: string;

  /**
   * Forwarding phone number type
   */
  type?: ('Home' | 'Mobile' | 'Work' | 'PhoneLine' | 'Outage' | 'Other');
}

export default ForwardingNumberResource;
