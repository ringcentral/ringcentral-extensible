// Returned if *BLF* feature is switched on
class UnifiedPresenceTelephony
{
    /// <summary>
    /// Telephony status calculated from all user's phone numbers. Returned always for the requester's extension; returned for another users if their telephony visibility is set to 'Visible'
    /// Enum: NoCall, Ringing, CallConnected, OnHold, ParkedCall
    /// </summary>
    status: string

    /// <summary>
    /// Specifies if the user hardphone presence status is visible to other users; returned only for requester's extension
    /// Enum: Visible, Invisible
    /// </summary>
    visibility: string

    /// <summary>
    /// Telephony DND status. Returned if *DND* feature is switched on
    /// Enum: TakeAllCalls, DoNotAcceptAnyCalls, DoNotAcceptQueueCalls
    /// </summary>
    availability: string
}

export default UnifiedPresenceTelephony