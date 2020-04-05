class GlipEventInfo
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
    /// </summary>
    title: string

    /// <summary>
    /// Datetime of starting an event
    /// </summary>
    startTime: string

    /// <summary>
    /// Datetime of ending an event
    /// </summary>
    endTime: string

    /// <summary>
    /// Indicates whether an event has some specific time slot or lasts for the whole day(s)
    /// </summary>
    allDay: boolean

    /// <summary>
    /// Event recurrence settings
    /// Enum: None, Day, Weekday, Week, Month, Year
    /// </summary>
    recurrence: string

    /// <summary>
    /// Condition of ending
    /// </summary>
    endingCondition: string

    /// <summary>
    /// Count of iterations. For periodic events only
    /// </summary>
    endingAfter: number

    /// <summary>
    /// Iterations end datetime for periodic events
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

export default GlipEventInfo