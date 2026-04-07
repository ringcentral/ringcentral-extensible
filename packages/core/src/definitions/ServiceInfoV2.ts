import type ServiceInfoPackage from "./ServiceInfoPackage.js";
import type ServiceInfoBrand from "./ServiceInfoBrand.js";
import type ServiceInfoContractedCountryId from "./ServiceInfoContractedCountryId.js";
import type ServiceInfoUBrand from "./ServiceInfoUBrand.js";
import type ServiceInfoPlanV2 from "./ServiceInfoPlanV2.js";

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
