interface DevicePhoneLinesEmergencyAddressInfo {
    /**
   * Indicates that emergency address is required
   */
  required?: boolean;

  /**
   * Indicates that only local emergency address can be specified
   */
  localOnly?: boolean;

  /**
   * Digital line provisioning status
   */
  lineProvisioningStatus?: ('Invalid' | 'Provisioning' | 'Valid');
}

export default DevicePhoneLinesEmergencyAddressInfo;
