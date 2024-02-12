import type ServiceInfoPackage from './ServiceInfoPackage';
import type ServiceInfoBrand from './ServiceInfoBrand';

/**
 * Service Plan information (billing package, brand, etc.)
 */
interface ServiceInfoV2 {
  /**
   * Required
   */
  package?: ServiceInfoPackage;

  /**
   */
  brand?: ServiceInfoBrand;
}

export default ServiceInfoV2;
