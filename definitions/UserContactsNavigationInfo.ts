import UserContactsNavigationInfoUri from './UserContactsNavigationInfoUri'

class UserContactsNavigationInfo
{
    /// <summary>
    /// Canonical URI for the first page of the list
    /// </summary>
    firstPage: UserContactsNavigationInfoUri

    /// <summary>
    /// Canonical URI for the next page of the list
    /// </summary>
    nextPage: UserContactsNavigationInfoUri

    /// <summary>
    /// Canonical URI for the previous page of the list
    /// </summary>
    previousPage: UserContactsNavigationInfoUri

    /// <summary>
    /// Canonical URI for the last page of the list
    /// </summary>
    lastPage: UserContactsNavigationInfoUri
}

export default UserContactsNavigationInfo