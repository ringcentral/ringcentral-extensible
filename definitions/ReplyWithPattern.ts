class ReplyWithPattern
{
    /// <summary>
    /// Predefined reply pattern name.
    /// Enum: WillCallYouBack, CallMeBack, OnMyWay, OnTheOtherLine, WillCallYouBackLater, CallMeBackLater, InAMeeting, OnTheOtherLineNoCall
    /// </summary>
    pattern: string

    /// <summary>
    /// Number of time units. Applicable only to WillCallYouBack, CallMeBack patterns.
    /// </summary>
    time: number

    /// <summary>
    /// Time unit name.
    /// Enum: Minute, Hour, Day
    /// </summary>
    timeUnit: string
}

export default ReplyWithPattern