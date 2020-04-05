import MessagingNavigationInfoURI from './MessagingNavigationInfoURI'

class MessagingNavigationInfo
{
    /// <summary>
    /// Canonical URI for the first page of the list
    /// </summary>
    firstPage: MessagingNavigationInfoURI

    /// <summary>
    /// Canonical URI for the next page of the list
    /// </summary>
    nextPage: MessagingNavigationInfoURI

    /// <summary>
    /// Canonical URI for the previous page of the list
    /// </summary>
    previousPage: MessagingNavigationInfoURI

    /// <summary>
    /// Canonical URI for the last page of the list
    /// </summary>
    lastPage: MessagingNavigationInfoURI
}

export default MessagingNavigationInfo