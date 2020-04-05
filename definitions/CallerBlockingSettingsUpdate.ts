import BlockedCallerGreetingInfo from './BlockedCallerGreetingInfo'

    // Returns the lists of blocked and allowed phone numbers
class CallerBlockingSettingsUpdate
{
    /// <summary>
    /// Call blocking options: either specific or all calls and faxes
    /// Enum: Specific, All
    /// </summary>
    mode: string

    /// <summary>
    /// Determines how to handle calls with no caller ID in 'Specific' mode
    /// Enum: BlockCallsAndFaxes, BlockFaxes, Allow
    /// </summary>
    noCallerId: string

    /// <summary>
    /// Blocking settings for pay phones
    /// Enum: Block, Allow
    /// </summary>
    payPhones: string

    /// <summary>
    /// List of greetings played for blocked callers
    /// </summary>
    greetings: BlockedCallerGreetingInfo[]
}

export default CallerBlockingSettingsUpdate