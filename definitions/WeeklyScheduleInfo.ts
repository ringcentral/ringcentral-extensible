import TimeInterval from './TimeInterval'

class WeeklyScheduleInfo
{
    /// <summary>
    /// Time intervals for a particular day
    /// </summary>
    monday: TimeInterval[]

    /// <summary>
    /// Time intervals for a particular day
    /// </summary>
    tuesday: TimeInterval[]

    /// <summary>
    /// Time intervals for a particular day
    /// </summary>
    wednesday: TimeInterval[]

    /// <summary>
    /// Time intervals for a particular day
    /// </summary>
    thursday: TimeInterval[]

    /// <summary>
    /// Time intervals for a particular day
    /// </summary>
    friday: TimeInterval[]

    /// <summary>
    /// Time intervals for a particular day
    /// </summary>
    saturday: TimeInterval[]

    /// <summary>
    /// Time intervals for a particular day
    /// </summary>
    sunday: TimeInterval[]
}

export default WeeklyScheduleInfo