import BrandInfo from './BrandInfo';
import CountryInfoShortModel from './CountryInfoShortModel';
import ServicePlanInfo from './ServicePlanInfo';
import TargetServicePlanInfo from './TargetServicePlanInfo';
import BillingPlanInfo from './BillingPlanInfo';
import ServiceFeatureInfo from './ServiceFeatureInfo';
import AccountLimits from './AccountLimits';
import PackageInfo from './PackageInfo';

/**
 * Account service information, including brand, service plan and billing plan
 *
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
  package?: PackageInfo;
}

export default AccountServiceInfoRequest;
