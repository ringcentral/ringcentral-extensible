class BillingInfo
{
    /// <summary>
    /// Cost per minute, paid and already included in your RingCentral Plan. For example International Calls
    /// </summary>
    costIncluded: number

    /// <summary>
    /// Cost per minute, paid and not included in your RingCentral Plan
    /// </summary>
    costPurchased: number
}

export default BillingInfo