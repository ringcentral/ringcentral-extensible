import MessagingNavigationInfoURI from './MessagingNavigationInfoURI'

class MessagingNavigationInfo
{
    /**
     * Canonical URI for the first page of the list
     */
    firstPage: MessagingNavigationInfoURI

    /**
     * Canonical URI for the next page of the list
     */
    nextPage: MessagingNavigationInfoURI

    /**
     * Canonical URI for the previous page of the list
     */
    previousPage: MessagingNavigationInfoURI

    /**
     * Canonical URI for the last page of the list
     */
    lastPage: MessagingNavigationInfoURI
}

export default MessagingNavigationInfo