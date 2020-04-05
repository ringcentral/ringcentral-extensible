class ListGlipTeamsParameters
{
    /// <summary>
    /// Number of teams to be fetched by one request. The maximum value is 250, by default - 30
    /// Maximum: 250
    /// Default: 30
    /// </summary>
    recordCount: number

    /// <summary>
    /// Pagination token.
    /// </summary>
    pageToken: string
}

export default ListGlipTeamsParameters