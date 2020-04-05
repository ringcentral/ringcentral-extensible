class BillingPlanInfo
{
    /**
     * Internal identifier of a billing plan
     */
    id?: string

    /**
     * Billing plan name
     */
    name?: string

    /**
     * Duration period
     * Enum: Month, Day
     */
    durationUnit?: string

    /**
     * Number of duration units
     */
    duration?: number

    /**
     * Billing plan type
     * Enum: Initial, Regular, Suspended, Trial, TrialNoCC, Free
     */
    type?: string

    /**
     * Included digital lines count
     */
    includedPhoneLines?: number
}

export default BillingPlanInfo