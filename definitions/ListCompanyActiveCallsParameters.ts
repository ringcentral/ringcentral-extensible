class ListCompanyActiveCallsParameters
{
    /**
     * The direction for the result records. If not specified, both inbound and outbound records are returned. Multiple values are accepted
     */
    direction: string[]

    /**
     * View of call records. The same view parameter specified for FSync will be applied for ISync, the view cannot be changed for ISync
     * Default: Simple
     * Enum: Simple, Detailed
     */
    view: string

    /**
     * Call type of a record. If not specified, all call types are returned. Multiple values are accepted
     */
    type: string[]

    /**
     * Call transport type. 'PSTN' specifies that a call leg is initiated from the PSTN network provider; 'VoIP' - from an RC phone. By default this filter is disabled
     */
    transport: string[]

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
}

export default ListCompanyActiveCallsParameters