/**
 * Forwarding device information. Applicable for 'PhoneLine' type only.
 * Cannot be specified together with 'phoneNumber' parameter
 */
interface CreateForwardingNumberDeviceInfo {
  /**
   * Internal identifier of the other extension device
   */
  id?: string;
}

export default CreateForwardingNumberDeviceInfo;
