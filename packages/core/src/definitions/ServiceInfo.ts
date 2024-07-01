import type BillingPlanInfo from './BillingPlanInfo';
import type BrandInfo from './BrandInfo';
import type ServicePlanInfo from './ServicePlanInfo';
import type TargetServicePlanInfo from './TargetServicePlanInfo';
import type CountryInfoShortModel from './CountryInfoShortModel';
import type UBrandInfo from './UBrandInfo';

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
  targetServicePlan?: TargetServicePlanInfo;

  /**
   */
  contractedCountry?: CountryInfoShortModel;

  /**
   */
  uBrand?: UBrandInfo;
}

export default ServiceInfo;
