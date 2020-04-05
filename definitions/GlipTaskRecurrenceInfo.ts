class GlipTaskRecurrenceInfo
{
    /**
     * Task recurrence settings. For non-periodic tasks the value is 'None'
     * Enum: None, Daily, Weekdays, Weekly, Monthly, Yearly
     */
    schedule: string

    /**
     * Task ending condition
     * Enum: None, Count, Date
     */
    endingCondition: string

    /**
     * Count of iterations of periodic tasks
     * Maximum: 10
     * Minimum: 1
     */
    endingAfter: number

    /**
     * End date of periodic task
     */
    endingOn: string
}

export default GlipTaskRecurrenceInfo