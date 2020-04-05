class CallerInfoTo
{
    /// <summary>
    /// </summary>
    phoneNumber: string

    /// <summary>
    /// </summary>
    name: string

    /// <summary>
    /// </summary>
    location: string

    /// <summary>
    /// Enum: Sent, SendingFailed, Queued
    /// </summary>
    messageStatus: string

    /// <summary>
    /// Enum: Undefined, NoFaxSendPermission, NoInternationalPermission, NoFaxMachine, NoAnswer, LineBusy, CallerHungUp, NotEnoughCredits, SentPartially, InternationalCallingDisabled, DestinationCountryDisabled, UnknownCountryCode, NotAccepted, InvalidNumber, CallDeclined, TooManyCallsPerLine, CallFailed, RenderingFailed, TooManyPages, ReturnToDBQueue, NoCallTime, WrongNumber, ProhibitedNumber, InternalError, FaxSendingProhibited, ThePhoneIsBlacklisted, UserNotFound, ConvertError, DBGeneralError, SkypeBillingFailed, AccountSuspended, ProhibitedDestination, InternationalDisabled
    /// </summary>
    faxErrorCode: string
}

export default CallerInfoTo