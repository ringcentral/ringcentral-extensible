import BrandInfo from "./BrandInfo.js";
import CountryInfoShortModel from "./CountryInfoShortModel.js";
import ServicePlanInfo from "./ServicePlanInfo.js";
import BillingPlanInfo from "./BillingPlanInfo.js";
import ServiceFeatureInfo from "./ServiceFeatureInfo.js";
import AccountLimitsInfo from "./AccountLimitsInfo.js";
import BillingPackageInfo from "./BillingPackageInfo.js";

/**
 * Account service information, including brand, service plan and billing plan
 */
interface AccountServiceInfoRequest {
  /**
   * Canonical URI of the account Service Info resource
   * Format: uri
   */
  uri?: string;

  /**
   * Account Service Plan name
   */
  servicePlanName?: string;

  /** */
  brand?: BrandInfo;

  /** */
  contractedCountry?: CountryInfoShortModel;

  /** */
  servicePlan?: ServicePlanInfo;

  /** */
  targetServicePlan?: ServicePlanInfo;

  /** */
  billingPlan?: BillingPlanInfo;

  /**
   * Service features information, see Service Feature List
   */
  serviceFeatures?: ServiceFeatureInfo[];

  /** */
  limits?: AccountLimitsInfo;

  /** */
  package?: BillingPackageInfo;
}

export default AccountServiceInfoRequest;
