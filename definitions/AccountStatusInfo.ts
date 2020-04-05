class AccountStatusInfo
{
    /// <summary>
    /// A free-form user comment, describing the status change reason
    /// </summary>
    comment: string

    /// <summary>
    /// Type of suspension
    /// Enum: SuspendedVoluntarily, SuspendedInvoluntarily, UserResumed
    /// </summary>
    reason: string

    /// <summary>
    /// Date until which the account will get deleted. The default value is 30 days since current date
    /// </summary>
    till: string
}

export default AccountStatusInfo