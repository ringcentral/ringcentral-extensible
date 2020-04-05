class GlipTaskRecurrenceInfo
{
    /// <summary>
    /// Task recurrence settings. For non-periodic tasks the value is 'None'
    /// Enum: None, Daily, Weekdays, Weekly, Monthly, Yearly
    /// </summary>
    schedule: string

    /// <summary>
    /// Task ending condition
    /// Enum: None, Count, Date
    /// </summary>
    endingCondition: string

    /// <summary>
    /// Count of iterations of periodic tasks
    /// Maximum: 10
    /// Minimum: 1
    /// </summary>
    endingAfter: number

    /// <summary>
    /// End date of periodic task
    /// </summary>
    endingOn: string
}

export default GlipTaskRecurrenceInfo