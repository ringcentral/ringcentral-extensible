class ListGlipGroupPostsParameters
{
    /// <summary>
    /// Max number of records to be returned
    /// Maximum: 250
    /// Default: 30
    /// </summary>
    recordCount: number

    /// <summary>
    /// Pagination token
    /// </summary>
    pageToken: string
}

export default ListGlipGroupPostsParameters