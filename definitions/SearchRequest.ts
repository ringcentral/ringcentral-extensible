class SearchRequest
{
    /// <summary>
    /// page size
    /// </summary>
    count: number

    /// <summary>
    /// only support 'userName' or 'email' filter expressions for now
    /// </summary>
    filter: string

    /// <summary>
    /// </summary>
    schemas: string[]

    /// <summary>
    /// start index (1-based)
    /// </summary>
    startIndex: number
}

export default SearchRequest