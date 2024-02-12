interface CreateAnsweringRuleForwardingNumberInfo {
  /**
   * Internal identifier of a forwarding number
   */
  id?: string;

  /**
   * Canonical URI of a forwarding/call flip phone number
   * Format: uri
   */
  uri?: string;

  /**
   * Forwarding/Call flip phone number
   */
  phoneNumber?: string;

  /**
   * Forwarding/Call flip number title
   */
  label?: string;

  /**
   * Type of forwarding number
   */
  type?:
    | 'Home'
    | 'Mobile'
    | 'Work'
    | 'PhoneLine'
    | 'Outage'
    | 'Other'
    | 'BusinessMobilePhone'
    | 'ExternalCarrier'
    | 'ExtensionApps';
}

export default CreateAnsweringRuleForwardingNumberInfo;
