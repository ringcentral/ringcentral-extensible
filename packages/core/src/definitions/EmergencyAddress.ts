interface EmergencyAddress {
  /**
   * If set to `true` then specifying emergency address is required
   */
  required?: boolean;

  /**
   * If set to `true` then only local emergency address can be specified
   */
  localOnly?: boolean;

  /**
   * This status is associated with a phone line provision state
   */
  lineProvisioningStatus?: 'Valid' | 'Provisioning' | 'Invalid';
}

export default EmergencyAddress;
