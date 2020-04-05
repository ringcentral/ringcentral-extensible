class GlipEventInfo
{
    /**
     * Internal identifier of an event
     */
    id: string

    /**
     * Internal identifier of a person created an event
     */
    creatorId: string

    /**
     * Event title
     */
    title: string

    /**
     * Datetime of starting an event
     */
    startTime: string

    /**
     * Datetime of ending an event
     */
    endTime: string

    /**
     * Indicates whether an event has some specific time slot or lasts for the whole day(s)
     */
    allDay: boolean

    /**
     * Event recurrence settings
     * Enum: None, Day, Weekday, Week, Month, Year
     */
    recurrence: string

    /**
     * Condition of ending
     */
    endingCondition: string

    /**
     * Count of iterations. For periodic events only
     */
    endingAfter: number

    /**
     * Iterations end datetime for periodic events
     * Default: None
     * Enum: None, Count, Date
     */
    endingOn: string

    /**
     * Color of Event title (including its presentation in Calendar)
     * Default: Black
     * Enum: Black, Red, Orange, Yellow, Green, Blue, Purple, Magenta
     */
    color: string

    /**
     * Event location
     */
    location: string

    /**
     * Event details
     */
    description: string
}

export default GlipEventInfo