class ListAnsweringRulesParameters
{
    /// <summary>
    /// Default: Simple
    /// Enum: Detailed, Simple
    /// </summary>
    view: string

    /// <summary>
    /// If true, then only active call handling rules are returned
    /// </summary>
    enabledOnly: boolean

    /// <summary>
    /// Default: 1
    /// </summary>
    page: string

    /// <summary>
    /// Default: 100
    /// </summary>
    perPage: string
}

export default ListAnsweringRulesParameters