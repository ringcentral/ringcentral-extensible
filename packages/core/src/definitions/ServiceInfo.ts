import type BillingPlanInfo from "./BillingPlanInfo.js";
import type BrandInfo from "./BrandInfo.js";
import type ServicePlanInfo from "./ServicePlanInfo.js";
import type CountryInfoShortModel from "./CountryInfoShortModel.js";
import type UBrandInfo from "./UBrandInfo.js";

/**
 * Account service information, including brand, sub-brand, service plan and
 * billing plan
 *
 */
interface ServiceInfo {
  /**
   * Canonical URI of a service info resource
   * Format: uri
   */
  uri?: string;

  /**
   */
  billingPlan?: BillingPlanInfo;

  /**
   */
  brand?: BrandInfo;

  /**
   */
  servicePlan?: ServicePlanInfo;

  /**
   */
  targetServicePlan?: ServicePlanInfo;

  /**
   */
  contractedCountry?: CountryInfoShortModel;

  /**
   */
  uBrand?: UBrandInfo;
}

export default ServiceInfo;
