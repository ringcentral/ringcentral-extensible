class ReasonInfo
{
    /// <summary>
    /// Reason code
    /// Enum: ServicePlanLimitation, AccountLimitation, ExtensionTypeLimitation, ExtensionLimitation, InsufficientPermissions, ConfigurationLimitation
    /// </summary>
    code: string

    /// <summary>
    /// Reason description
    /// </summary>
    message: string
}

export default ReasonInfo