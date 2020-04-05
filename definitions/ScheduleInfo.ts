import WeeklyScheduleInfo from './WeeklyScheduleInfo'
import RangesInfo from './RangesInfo'

class ScheduleInfo
{
    /// <summary>
    /// Weekly schedule
    /// </summary>
    weeklyRanges: WeeklyScheduleInfo

    /// <summary>
    /// Specific data ranges
    /// </summary>
    ranges: RangesInfo[]

    /// <summary>
    /// The user's schedule specified for business hours or after hours; it can also be set/retrieved calling the corresponding method
    /// Enum: BusinessHours, AfterHours
    /// </summary>
    ref: string
}

export default ScheduleInfo