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
   */
  version?: "1";
}

export default ServiceInfoPackage;
