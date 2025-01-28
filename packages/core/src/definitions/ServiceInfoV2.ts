import ServiceInfoPackage from "./ServiceInfoPackage";
import ServiceInfoBrand from "./ServiceInfoBrand";
import ServiceInfoContractedCountryId from "./ServiceInfoContractedCountryId";
import ServiceInfoUBrand from "./ServiceInfoUBrand";
import ServiceInfoPlanV2 from "./ServiceInfoPlanV2";

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
