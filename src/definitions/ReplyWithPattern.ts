class ReplyWithPattern
{
  /**
   * Predefined reply pattern name.
   * Enum: WillCallYouBack, CallMeBack, OnMyWay, OnTheOtherLine, WillCallYouBackLater, CallMeBackLater, InAMeeting, OnTheOtherLineNoCall
   */
  pattern?: string

  /**
   * Number of time units. Applicable only to WillCallYouBack, CallMeBack patterns.
   */
  time?: number

  /**
   * Time unit name.
   * Enum: Minute, Hour, Day
   */
  timeUnit?: string
}

export default ReplyWithPattern
