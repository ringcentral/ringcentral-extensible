/**
 * Emergency response location information
 */
interface EmergencyLocationInfo {
  /**
   * Internal identifier of an emergency response location
   * Required
   */
  id?: string;

  /**
   * Emergency response location name
   */
  name?: string;

  /**
   * Address format identifier
   */
  addressFormatId?: string;

  /**
   * Emergency address status. Only supported for extension-level (personal) endpoints
   */
  addressStatus?: "Valid" | "Invalid" | "Provisioning" | "Deprovisioned";
}

export default EmergencyLocationInfo;
