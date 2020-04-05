import DictionaryGreetingInfo from './DictionaryGreetingInfo'
import CallHandlingNavigationInfo from './CallHandlingNavigationInfo'
import CallHandlingPagingInfo from './CallHandlingPagingInfo'

class DictionaryGreetingList
{
    /**
     * Canonical URI of greetings list resource
     */
    uri: string

    /**
     * List of greetings
     */
    records: DictionaryGreetingInfo[]

    /**
     * Information on navigation
     */
    navigation: CallHandlingNavigationInfo

    /**
     * Information on paging
     */
    paging: CallHandlingPagingInfo
}

export default DictionaryGreetingList