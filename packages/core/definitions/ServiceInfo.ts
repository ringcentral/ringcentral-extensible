import {
  BillingPlanInfo,
  BrandInfo,
  ServicePlanInfo,
  TargetServicePlanInfo,
  ContractedCountryInfo,
} from './index';

class ServiceInfo {
  /**
   * Canonical URI of a service info resource
   */
  uri?: string;

  /**
   * Information on account billing plan
   */
  billingPlan?: BillingPlanInfo;

  /**
   * Information on account brand
   */
  brand?: BrandInfo;

  /**
   * Information on account service plan
   */
  servicePlan?: ServicePlanInfo;

  /**
   * Information on account target service plan
   */
  targetServicePlan?: TargetServicePlanInfo;

  /**
   * Information on the contracted country of account
   */
  contractedCountry?: ContractedCountryInfo;
}

export default ServiceInfo;
