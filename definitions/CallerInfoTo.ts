class CallerInfoTo
{
    /**
     */
    phoneNumber?: string

    /**
     */
    name?: string

    /**
     */
    location?: string

    /**
     * Enum: Sent, SendingFailed, Queued
     */
    messageStatus?: string

    /**
     * Enum: Undefined, NoFaxSendPermission, NoInternationalPermission, NoFaxMachine, NoAnswer, LineBusy, CallerHungUp, NotEnoughCredits, SentPartially, InternationalCallingDisabled, DestinationCountryDisabled, UnknownCountryCode, NotAccepted, InvalidNumber, CallDeclined, TooManyCallsPerLine, CallFailed, RenderingFailed, TooManyPages, ReturnToDBQueue, NoCallTime, WrongNumber, ProhibitedNumber, InternalError, FaxSendingProhibited, ThePhoneIsBlacklisted, UserNotFound, ConvertError, DBGeneralError, SkypeBillingFailed, AccountSuspended, ProhibitedDestination, InternationalDisabled
     */
    faxErrorCode?: string
}

export default CallerInfoTo