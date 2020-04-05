class CallQueueExtensionInfo
{
    /// <summary>
    /// Target percentage of calls that must be answered by agents within the service level time threshold
    /// </summary>
    slaGoal: number

    /// <summary>
    /// Period of time in seconds that is considered to be an acceptable service level
    /// </summary>
    slaThresholdSeconds: number

    /// <summary>
    /// If 'True' abandoned calls (hanged up prior to being served) are included into service level calculation
    /// </summary>
    includeAbandonedCalls: boolean

    /// <summary>
    /// Period of time in seconds specifying abandoned calls duration - calls that are shorter will not be included into the calculation of service level.; zero value means that abandoned calls of any duration will be included into calculation
    /// </summary>
    abandonedThresholdSeconds: number
}

export default CallQueueExtensionInfo