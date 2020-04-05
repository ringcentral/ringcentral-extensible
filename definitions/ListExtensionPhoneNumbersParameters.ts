class ListExtensionPhoneNumbersParameters
{
    /**
     * Status of a phone number. Multiple values are supported
     * Enum: Normal, Pending, PortedIn, Temporary
     */
    status: string

    /**
     * Usage type of a phone number
     */
    usageType: string[]

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page: number

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage: number
}

export default ListExtensionPhoneNumbersParameters