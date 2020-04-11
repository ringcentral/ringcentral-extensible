class ReasonInfo
{
  /**
   * Reason code
   */
  code?: ('ServicePlanLimitation' | 'AccountLimitation' | 'ExtensionTypeLimitation' | 'ExtensionLimitation' | 'InsufficientPermissions' | 'ConfigurationLimitation')

  /**
   * Reason description
   */
  message?: string
}

export default ReasonInfo
