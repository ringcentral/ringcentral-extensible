class GlipEventCreate
{
    /// <summary>
    /// Internal identifier of an event
    /// </summary>
    id: string

    /// <summary>
    /// Internal identifier of a person created an event
    /// </summary>
    creatorId: string

    /// <summary>
    /// Event title
    /// Required
    /// </summary>
    title: string

    /// <summary>
    /// Datetime of starting an event
    /// Required
    /// </summary>
    startTime: string

    /// <summary>
    /// Datetime of ending an event
    /// Required
    /// </summary>
    endTime: string

    /// <summary>
    /// Indicates whether event has some specific time slot or lasts for whole day(s)
    /// </summary>
    allDay: boolean

    /// <summary>
    /// Event recurrence settings. For non-periodic events the value is 'None'. Must be greater or equal to event duration: 1- Day/Weekday; 7 - Week; 28 - Month; 365 - Year
    /// Enum: None, Day, Weekday, Week, Month, Year
    /// </summary>
    recurrence: string

    /// <summary>
    /// Condition of ending
    /// </summary>
    endingCondition: string

    /// <summary>
    /// Count of iterations. For periodic events only. Value range is 1 - 10. Must be specified if 'endingCondition' is 'Count'
    /// </summary>
    endingAfter: number

    /// <summary>
    /// Iterations end datetime for periodic events.
    /// Default: None
    /// Enum: None, Count, Date
    /// </summary>
    endingOn: string

    /// <summary>
    /// Color of Event title (including its presentation in Calendar)
    /// Default: Black
    /// Enum: Black, Red, Orange, Yellow, Green, Blue, Purple, Magenta
    /// </summary>
    color: string

    /// <summary>
    /// Event location
    /// </summary>
    location: string

    /// <summary>
    /// Event details
    /// </summary>
    description: string
}

export default GlipEventCreate