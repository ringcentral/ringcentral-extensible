interface ForwardingNumberInfoRulesCreateRuleRequest {
  /**
   * Internal identifier of a forwarding number
   */
  id?: string;

  /**
   * Forwarding phone number type
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

  /**
   * Forwarding/Call flip phone number
   */
  phoneNumber?: string;

  /**
   * Forwarding/Call flip number title
   */
  label?: string;
}

export default ForwardingNumberInfoRulesCreateRuleRequest;
