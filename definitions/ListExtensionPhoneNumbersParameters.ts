class ListExtensionPhoneNumbersParameters
{
    /// <summary>
    /// Status of a phone number. Multiple values are supported
    /// Enum: Normal, Pending, PortedIn, Temporary
    /// </summary>
    status: string

    /// <summary>
    /// Usage type of a phone number
    /// </summary>
    usageType: string[]

    /// <summary>
    /// Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
    /// </summary>
    page: number

    /// <summary>
    /// Indicates the page size (number of items). If not specified, the value is '100' by default
    /// </summary>
    perPage: number
}

export default ListExtensionPhoneNumbersParameters