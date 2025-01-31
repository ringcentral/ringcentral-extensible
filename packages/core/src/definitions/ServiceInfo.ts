import BillingPlanInfo from "./BillingPlanInfo.js";
import BrandInfo from "./BrandInfo.js";
import ServicePlanInfo from "./ServicePlanInfo.js";
import TargetServicePlanInfo from "./TargetServicePlanInfo.js";
import CountryInfoShortModel from "./CountryInfoShortModel.js";
import UBrandInfo from "./UBrandInfo.js";

/**
 * Account service information, including brand, sub-brand, service plan and
 * billing plan
 */
interface ServiceInfo {
  /**
   * Canonical URI of a service info resource
   * Format: uri
   */
  uri?: string;

  /** */
  billingPlan?: BillingPlanInfo;

  /** */
  brand?: BrandInfo;

  /** */
  servicePlan?: ServicePlanInfo;

  /** */
  targetServicePlan?: TargetServicePlanInfo;

  /** */
  contractedCountry?: CountryInfoShortModel;

  /** */
  uBrand?: UBrandInfo;
}

export default ServiceInfo;
