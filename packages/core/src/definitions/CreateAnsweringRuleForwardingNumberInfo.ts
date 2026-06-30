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
   * Forwarding phone number type
   */
  type?:
    | "Home"
    | "Mobile"
    | "Work"
    | "PhoneLine"
    | "Outage"
    | "Other"
    | "BusinessMobilePhone"
    | "ExtensionApps";
}

export default CreateAnsweringRuleForwardingNumberInfo;
