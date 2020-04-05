class ReasonInfo
{
    /**
     * Reason code
     * Enum: ServicePlanLimitation, AccountLimitation, ExtensionTypeLimitation, ExtensionLimitation, InsufficientPermissions, ConfigurationLimitation
     */
    code: string

    /**
     * Reason description
     */
    message: string
}

export default ReasonInfo