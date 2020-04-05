import BillingPlanInfo from './BillingPlanInfo'
import BrandInfo from './BrandInfo'
import ServicePlanInfo from './ServicePlanInfo'
import TargetServicePlanInfo from './TargetServicePlanInfo'

class ServiceInfo
{
    /**
     * Canonical URI of a service info resource
     */
    uri: string

    /**
     * Information on account billing plan
     */
    billingPlan: BillingPlanInfo

    /**
     * Information on account brand
     */
    brand: BrandInfo

    /**
     * Information on account service plan
     */
    servicePlan: ServicePlanInfo

    /**
     * Information on account target service plan
     */
    targetServicePlan: TargetServicePlanInfo
}

export default ServiceInfo