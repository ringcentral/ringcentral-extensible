class ServiceFeatureValue
{
    /**
     */
    featureName?: string

    /**
     */
    enabled?: boolean

    /**
     * Enum: Available, AccountTypeLimitation, ExtensionTypeLimitation, AccountLimitation, ExtensionLimitation, InsufficientPermissions, ApplicationLimitation
     */
    reason?: string
}

export default ServiceFeatureValue