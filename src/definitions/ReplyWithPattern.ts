class ReplyWithPattern
{
  /**
   * Predefined reply pattern name.
   */
  pattern?: ('WillCallYouBack' | 'CallMeBack' | 'OnMyWay' | 'OnTheOtherLine' | 'WillCallYouBackLater' | 'CallMeBackLater' | 'InAMeeting' | 'OnTheOtherLineNoCall')

  /**
   * Number of time units. Applicable only to WillCallYouBack, CallMeBack patterns.
   */
  time?: number

  /**
   * Time unit name.
   */
  timeUnit?: ('Minute' | 'Hour' | 'Day')
}

export default ReplyWithPattern
