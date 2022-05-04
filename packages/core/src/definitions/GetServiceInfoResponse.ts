import {
  BrandInfo, ContractedCountryInfo, ServicePlanInfo, TargetServicePlanInfo, BillingPlanInfo, ServiceFeatureInfo, AccountLimits, PackageInfo,
} from './index';

class GetServiceInfoResponse {
  /**
   * Canonical URI of the account Service Info resource
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
  contractedCountry?: ContractedCountryInfo;

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
export default GetServiceInfoResponse;
