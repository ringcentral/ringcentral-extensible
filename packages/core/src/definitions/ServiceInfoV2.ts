import type ServiceInfoPackage from './ServiceInfoPackage';
import type ServiceInfoBrand from './ServiceInfoBrand';
import type ServiceInfoCountryShortModel from './ServiceInfoCountryShortModel';
import type ServiceInfoUBrand from './ServiceInfoUBrand';
import type ServiceInfoPlan from './ServiceInfoPlan';

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

  /**
   */
  contractedCountry?: ServiceInfoCountryShortModel;

  /**
   */
  uBrand?: ServiceInfoUBrand;

  /**
   */
  servicePlan?: ServiceInfoPlan;
}

export default ServiceInfoV2;
