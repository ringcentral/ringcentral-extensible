import {
  BillingPlanInfo,
  BrandInfo,
  ServicePlanInfo,
  TargetServicePlanInfo,
  ContractedCountryInfo,
} from './index';

/**
 * Account service information, including brand, service plan and billing plan
 */
class ServiceInfo {
  /**
   * Canonical URI of a service info resource
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
  targetServicePlan?: TargetServicePlanInfo;

  /**
   */
  contractedCountry?: ContractedCountryInfo;
}
export default ServiceInfo;
