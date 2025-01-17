import type ServiceInfoPackage from './ServiceInfoPackage';
import type ServiceInfoBrand from './ServiceInfoBrand';
import type ServiceInfoContractedCountryId from './ServiceInfoContractedCountryId';
import type ServiceInfoUBrand from './ServiceInfoUBrand';
import type ServiceInfoPlanV2 from './ServiceInfoPlanV2';

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
  servicePlan?: ServiceInfoPlanV2;
}

export default ServiceInfoV2;
