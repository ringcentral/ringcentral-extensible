// Returned if *BLF* feature is switched on
class UnifiedPresenceTelephony
{
    /**
     * Telephony status calculated from all user's phone numbers. Returned always for the requester's extension; returned for another users if their telephony visibility is set to 'Visible'
     * Enum: NoCall, Ringing, CallConnected, OnHold, ParkedCall
     */
    status?: string

    /**
     * Specifies if the user hardphone presence status is visible to other users; returned only for requester's extension
     * Enum: Visible, Invisible
     */
    visibility?: string

    /**
     * Telephony DND status. Returned if *DND* feature is switched on
     * Enum: TakeAllCalls, DoNotAcceptAnyCalls, DoNotAcceptQueueCalls
     */
    availability?: string
}

export default UnifiedPresenceTelephony