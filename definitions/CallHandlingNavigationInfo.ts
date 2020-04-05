import CallHandlingNavigationInfoUri from './CallHandlingNavigationInfoUri'

class CallHandlingNavigationInfo
{
    /// <summary>
    /// Canonical URI for the first page of the list
    /// </summary>
    firstPage: CallHandlingNavigationInfoUri

    /// <summary>
    /// Canonical URI for the next page of the list
    /// </summary>
    nextPage: CallHandlingNavigationInfoUri

    /// <summary>
    /// Canonical URI for the previous page of the list
    /// </summary>
    previousPage: CallHandlingNavigationInfoUri

    /// <summary>
    /// Canonical URI for the last page of the list
    /// </summary>
    lastPage: CallHandlingNavigationInfoUri
}

export default CallHandlingNavigationInfo