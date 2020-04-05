import PresenceNavigationInfoURI from './PresenceNavigationInfoURI'

class PresenceNavigationInfo
{
    /// <summary>
    /// Canonical URI for the first page of the list
    /// </summary>
    firstPage: PresenceNavigationInfoURI

    /// <summary>
    /// Canonical URI for the next page of the list
    /// </summary>
    nextPage: PresenceNavigationInfoURI

    /// <summary>
    /// Canonical URI for the previous page of the list
    /// </summary>
    previousPage: PresenceNavigationInfoURI

    /// <summary>
    /// Canonical URI for the last page of the list
    /// </summary>
    lastPage: PresenceNavigationInfoURI
}

export default PresenceNavigationInfo