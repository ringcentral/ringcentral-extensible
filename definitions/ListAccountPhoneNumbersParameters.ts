class ListAccountPhoneNumbersParameters
{
    /**
     * Indicates the page number to retrieve. Only positive number values are accepted
     * Default: 1
     */
    page: number

    /**
     * Indicates the page size (number of items)
     * Default: 100
     */
    perPage: number

    /**
     * Usage type of a phone number
     */
    usageType: string[]

    /**
     * Status of a phone number. Multiple values are supported
     * Enum: Normal, Pending, PortedIn, Temporary
     */
    status: string
}

export default ListAccountPhoneNumbersParameters