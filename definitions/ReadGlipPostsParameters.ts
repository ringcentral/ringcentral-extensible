class ReadGlipPostsParameters
{
    /// <summary>
    /// Max number of posts to be fetched by one request (Not more than 250).
    /// Maximum: 250
    /// Default: 30
    /// </summary>
    recordCount: number

    /// <summary>
    /// Pagination token.
    /// </summary>
    pageToken: string
}

export default ReadGlipPostsParameters