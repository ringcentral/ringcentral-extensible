class GlipNavigationInfo
{
    /// <summary>
    /// Previous page token. To get previous page, user should pass one of returned token in next request and, in turn, required page will be returned with new tokens
    /// </summary>
    prevPageToken: string

    /// <summary>
    /// Next page token. To get next page, user should pass one of returned token in next request and, in turn, required page will be returned with new tokens
    /// </summary>
    nextPageToken: string
}

export default GlipNavigationInfo