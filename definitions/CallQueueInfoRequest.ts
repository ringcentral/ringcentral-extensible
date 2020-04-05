class CallQueueInfoRequest
{
    /// <summary>
    /// Target percentage of calls that must be answered by agents within the service level time threshold
    /// </summary>
    slaGoal: number

    /// <summary>
    /// </summary>
    slaThresholdSeconds: number

    /// <summary>
    /// </summary>
    includeAbandonedCalls: boolean

    /// <summary>
    /// </summary>
    abandonedThresholdSeconds: number
}

export default CallQueueInfoRequest