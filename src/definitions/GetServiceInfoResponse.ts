import { BrandInfo, ServicePlanInfo, BillingPlanInfo, ServiceFeatureInfo, AccountLimits, PackageInfo } from '.'

class GetServiceInfoResponse {
  /**
   * Canonical URI of the account Service Info resource
   */
  uri?: string

  /**
   * Account Service Plan name
   */
  servicePlanName?: string

  /**
   * Information on account brand
   */
  brand?: BrandInfo

  /**
   * Information on account service plan
   */
  servicePlan?: ServicePlanInfo

  /**
   */
  targetServicePlan?: ServicePlanInfo

  /**
   * Information on account billing plan
   */
  billingPlan?: BillingPlanInfo

  /**
   * Service features information, see Service Feature List
   */
  serviceFeatures?: ServiceFeatureInfo[]

  /**
   * Limits which are effective for the account
   */
  limits?: AccountLimits

  /**
   */
  package?: PackageInfo
}

export default GetServiceInfoResponse
