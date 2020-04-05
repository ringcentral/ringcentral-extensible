class BillingPlanInfo
{
    /// <summary>
    /// Internal identifier of a billing plan
    /// </summary>
    id: string

    /// <summary>
    /// Billing plan name
    /// </summary>
    name: string

    /// <summary>
    /// Duration period
    /// Enum: Month, Day
    /// </summary>
    durationUnit: string

    /// <summary>
    /// Number of duration units
    /// </summary>
    duration: number

    /// <summary>
    /// Billing plan type
    /// Enum: Initial, Regular, Suspended, Trial, TrialNoCC, Free
    /// </summary>
    type: string

    /// <summary>
    /// Included digital lines count
    /// </summary>
    includedPhoneLines: number
}

export default BillingPlanInfo