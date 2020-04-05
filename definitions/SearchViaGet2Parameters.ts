class SearchViaGet2Parameters
{
    /// <summary>
    /// only support 'userName' or 'email' filter expressions for now
    /// </summary>
    filter: string

    /// <summary>
    /// start index (1-based)
    /// Default: 1
    /// </summary>
    startIndex: number

    /// <summary>
    /// page size
    /// Default: 100
    /// </summary>
    count: number
}

export default SearchViaGet2Parameters