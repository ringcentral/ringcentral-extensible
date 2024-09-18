import type ServiceInfoPackage from './ServiceInfoPackage';
import type ServiceInfoBrand from './ServiceInfoBrand';
import type ServiceInfoContractedCountryId from './ServiceInfoContractedCountryId';
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
  partnerPackage?: ServiceInfoPackage;

  /**
   */
  brand?: ServiceInfoBrand;

  /**
   */
  contractedCountry?: ServiceInfoContractedCountryId;

  /**
   */
  uBrand?: ServiceInfoUBrand;

  /**
   */
  servicePlan?: ServiceInfoPlan;
}

export default ServiceInfoV2;
