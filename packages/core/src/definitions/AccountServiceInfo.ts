import BrandInfo from "./BrandInfo.js";
import CountryInfoShortModel from "./CountryInfoShortModel.js";
import ServicePlanInfo from "./ServicePlanInfo.js";
import TargetServicePlanInfo from "./TargetServicePlanInfo.js";
import BillingPlanInfo from "./BillingPlanInfo.js";
import ServiceFeatureInfo from "./ServiceFeatureInfo.js";
import AccountLimits from "./AccountLimits.js";
import BillingPackageInfo from "./BillingPackageInfo.js";
import UBrandInfo from "./UBrandInfo.js";

/**
 * Account service information, including brand, service plan and billing plan
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

  /** */
  brand?: BrandInfo;

  /** */
  contractedCountry?: CountryInfoShortModel;

  /** */
  servicePlan?: ServicePlanInfo;

  /** */
  targetServicePlan?: TargetServicePlanInfo;

  /** */
  billingPlan?: BillingPlanInfo;

  /**
   * Service features information, see Service Feature List
   */
  serviceFeatures?: ServiceFeatureInfo[];

  /** */
  limits?: AccountLimits;

  /** */
  package?: BillingPackageInfo;

  /** */
  uBrand?: UBrandInfo;
}

export default AccountServiceInfo;
