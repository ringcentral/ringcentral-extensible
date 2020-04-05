import BrandInfo from './BrandInfo'
import ServicePlanInfo from './ServicePlanInfo'
import BillingPlanInfo from './BillingPlanInfo'
import ServiceFeatureInfo from './ServiceFeatureInfo'
import AccountLimits from './AccountLimits'
import PackageInfo from './PackageInfo'

class GetServiceInfoResponse
{
    /// <summary>
    /// Canonical URI of the account Service Info resource
    /// </summary>
    uri: string

    /// <summary>
    /// Account Service Plan name
    /// </summary>
    servicePlanName: string

    /// <summary>
    /// Information on account brand
    /// </summary>
    brand: BrandInfo

    /// <summary>
    /// Information on account service plan
    /// </summary>
    servicePlan: ServicePlanInfo

    /// <summary>
    /// </summary>
    targetServicePlan: ServicePlanInfo

    /// <summary>
    /// Information on account billing plan
    /// </summary>
    billingPlan: BillingPlanInfo

    /// <summary>
    /// Service features information, see Service Feature List
    /// </summary>
    serviceFeatures: ServiceFeatureInfo[]

    /// <summary>
    /// Limits which are effective for the account
    /// </summary>
    limits: AccountLimits

    /// <summary>
    /// </summary>
    package: PackageInfo
}

export default GetServiceInfoResponse