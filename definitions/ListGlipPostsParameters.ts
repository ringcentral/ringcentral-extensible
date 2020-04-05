class ListGlipPostsParameters
{
    /// <summary>
    /// Identifier of a group to filter posts
    /// </summary>
    groupId: string

    /// <summary>
    /// Token of a page to be returned
    /// </summary>
    pageToken: string

    /// <summary>
    /// Number of records to be returned. The maximum value is 250, by default - 30
    /// Maximum: 250
    /// Default: 30
    /// </summary>
    recordCount: number
}

export default ListGlipPostsParameters