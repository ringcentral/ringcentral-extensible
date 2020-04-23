import { UserContactsNavigationInfoUri } from '.'

class UserContactsNavigationInfo {
  /**
   * Canonical URI for the first page of the list
   */
  firstPage?: UserContactsNavigationInfoUri

  /**
   * Canonical URI for the next page of the list
   */
  nextPage?: UserContactsNavigationInfoUri

  /**
   * Canonical URI for the previous page of the list
   */
  previousPage?: UserContactsNavigationInfoUri

  /**
   * Canonical URI for the last page of the list
   */
  lastPage?: UserContactsNavigationInfoUri
}

export default UserContactsNavigationInfo
