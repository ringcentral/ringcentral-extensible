import type BrandInfo from "./BrandInfo.js";
import type CountryInfoShortModel from "./CountryInfoShortModel.js";
import type ServicePlanInfo from "./ServicePlanInfo.js";
import type BillingPlanInfo from "./BillingPlanInfo.js";
import type ServiceFeatureInfo from "./ServiceFeatureInfo.js";
import type AccountLimitsInfo from "./AccountLimitsInfo.js";
import type BillingPackageInfo from "./BillingPackageInfo.js";
import type UBrandInfo from "./UBrandInfo.js";

/**
 * Account service information, including brand, service plan and billing plan
 *
 */
interface AccountServiceInfo {
  /**
   * Canonical URI of the account Service Info resource
   * Format: uri
   */
  uri?: string;

  /**
   * Account Service Plan name
   */
  servicePlanName?: string;

  /**
   */
  brand?: BrandInfo;

  /**
   */
  contractedCountry?: CountryInfoShortModel;

  /**
   */
  servicePlan?: ServicePlanInfo;

  /**
   */
  targetServicePlan?: ServicePlanInfo;

  /**
   */
  billingPlan?: BillingPlanInfo;

  /**
   * Service features information, see Service Feature List
   */
  serviceFeatures?: ServiceFeatureInfo[];

  /**
   */
  limits?: AccountLimitsInfo;

  /**
   */
  package?: BillingPackageInfo;

  /**
   */
  uBrand?: UBrandInfo;
}

export default AccountServiceInfo;
