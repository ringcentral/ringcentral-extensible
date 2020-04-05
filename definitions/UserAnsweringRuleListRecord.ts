class UserAnsweringRuleListRecord
{
    /// <summary>
    /// Canonical URI to an answering rule resource
    /// </summary>
    uri: string

    /// <summary>
    /// Internal identifier of an asnwering rule
    /// </summary>
    id: string

    /// <summary>
    /// Type of an answering rule
    /// Enum: BusinessHours, AfterHours, Custom
    /// </summary>
    type: string

    /// <summary>
    /// Name of an answering rule specified by user
    /// </summary>
    name: string

    /// <summary>
    /// Specifies if an answering rule is active or inactive
    /// </summary>
    enabled: boolean
}

export default UserAnsweringRuleListRecord