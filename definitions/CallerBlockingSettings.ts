import BlockedCallerGreetingInfo from './BlockedCallerGreetingInfo'

    // Returns the lists of blocked and allowed phone numbers
class CallerBlockingSettings
{
    /**
     * Call blocking options: either specific or all calls and faxes
     * Enum: Specific, All
     */
    mode?: string

    /**
     * Determines how to handle calls with no caller ID in 'Specific' mode
     * Enum: BlockCallsAndFaxes, BlockFaxes, Allow
     */
    noCallerId?: string

    /**
     * Blocking settings for pay phones
     * Enum: Block, Allow
     */
    payPhones?: string

    /**
     * List of greetings played for blocked callers
     */
    greetings?: BlockedCallerGreetingInfo[]
}

export default CallerBlockingSettings