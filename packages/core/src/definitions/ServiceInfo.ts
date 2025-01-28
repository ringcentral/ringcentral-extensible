import BillingPlanInfo from "./BillingPlanInfo";
import BrandInfo from "./BrandInfo";
import ServicePlanInfo from "./ServicePlanInfo";
import TargetServicePlanInfo from "./TargetServicePlanInfo";
import CountryInfoShortModel from "./CountryInfoShortModel";
import UBrandInfo from "./UBrandInfo";

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
