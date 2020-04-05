class ListAccountPhoneNumbersParameters
{
    /// <summary>
    /// Indicates the page number to retrieve. Only positive number values are accepted
    /// Default: 1
    /// </summary>
    page: number

    /// <summary>
    /// Indicates the page size (number of items)
    /// Default: 100
    /// </summary>
    perPage: number

    /// <summary>
    /// Usage type of a phone number
    /// </summary>
    usageType: string[]

    /// <summary>
    /// Status of a phone number. Multiple values are supported
    /// Enum: Normal, Pending, PortedIn, Temporary
    /// </summary>
    status: string
}

export default ListAccountPhoneNumbersParameters