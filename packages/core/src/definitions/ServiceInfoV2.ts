import ServiceInfoPackage from "./ServiceInfoPackage.js";
import ServiceInfoBrand from "./ServiceInfoBrand.js";
import ServiceInfoContractedCountryId from "./ServiceInfoContractedCountryId.js";
import ServiceInfoUBrand from "./ServiceInfoUBrand.js";
import ServiceInfoPlanV2 from "./ServiceInfoPlanV2.js";

/**
 * Service Plan information (billing package, brand, etc.)
 */
interface ServiceInfoV2 {
  /**
   * Required
   */
  package?: ServiceInfoPackage;

  /** */
  partnerPackage?: ServiceInfoPackage;

  /** */
  brand?: ServiceInfoBrand;

  /** */
  contractedCountry?: ServiceInfoContractedCountryId;

  /** */
  uBrand?: ServiceInfoUBrand;

  /** */
  servicePlan?: ServiceInfoPlanV2;
}

export default ServiceInfoV2;
