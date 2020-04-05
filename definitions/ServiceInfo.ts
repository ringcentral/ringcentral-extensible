import BillingPlanInfo from './BillingPlanInfo'
import BrandInfo from './BrandInfo'
import ServicePlanInfo from './ServicePlanInfo'
import TargetServicePlanInfo from './TargetServicePlanInfo'

class ServiceInfo
{
    /// <summary>
    /// Canonical URI of a service info resource
    /// </summary>
    uri: string

    /// <summary>
    /// Information on account billing plan
    /// </summary>
    billingPlan: BillingPlanInfo

    /// <summary>
    /// Information on account brand
    /// </summary>
    brand: BrandInfo

    /// <summary>
    /// Information on account service plan
    /// </summary>
    servicePlan: ServicePlanInfo

    /// <summary>
    /// Information on account target service plan
    /// </summary>
    targetServicePlan: TargetServicePlanInfo
}

export default ServiceInfo