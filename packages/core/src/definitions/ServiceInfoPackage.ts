/**
 * Billing package information
 */
interface ServiceInfoPackage {
  /**
   * Billing package ID
   * Required
   * Example: 555
   */
  id?: string;

  /**
   * Billing package version
   * Required
   * Example: 1
   */
  version?: string;
}

export default ServiceInfoPackage;
