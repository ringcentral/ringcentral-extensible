import type BrandInfo from './BrandInfo';
import type CountryInfoShortModel from './CountryInfoShortModel';
import type ServicePlanInfo from './ServicePlanInfo';
import type TargetServicePlanInfo from './TargetServicePlanInfo';
import type BillingPlanInfo from './BillingPlanInfo';
import type ServiceFeatureInfo from './ServiceFeatureInfo';
import type AccountLimits from './AccountLimits';
import type BillingPackageInfo from './BillingPackageInfo';
import type UBrandInfo from './UBrandInfo';

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
  targetServicePlan?: TargetServicePlanInfo;

  /**
   */
  billingPlan?: BillingPlanInfo;

  /**
   * Service features information, see Service Feature List
   */
  serviceFeatures?: ServiceFeatureInfo[];

  /**
   */
  limits?: AccountLimits;

  /**
   */
  package?: BillingPackageInfo;

  /**
   */
  uBrand?: UBrandInfo;
}

export default AccountServiceInfo;
