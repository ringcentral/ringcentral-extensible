import CallLogNavigationInfoURI from './CallLogNavigationInfoURI'

class CallLogNavigationInfo
{
    /// <summary>
    /// Canonical URI for the first page of the list
    /// </summary>
    firstPage: CallLogNavigationInfoURI

    /// <summary>
    /// Canonical URI for the next page of the list
    /// </summary>
    nextPage: CallLogNavigationInfoURI

    /// <summary>
    /// Canonical URI for the previous page of the list
    /// </summary>
    previousPage: CallLogNavigationInfoURI

    /// <summary>
    /// Canonical URI for the last page of the list
    /// </summary>
    lastPage: CallLogNavigationInfoURI
}

export default CallLogNavigationInfo