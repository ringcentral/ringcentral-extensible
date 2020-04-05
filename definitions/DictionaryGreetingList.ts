import DictionaryGreetingInfo from './DictionaryGreetingInfo'
import CallHandlingNavigationInfo from './CallHandlingNavigationInfo'
import CallHandlingPagingInfo from './CallHandlingPagingInfo'

class DictionaryGreetingList
{
    /// <summary>
    /// Canonical URI of greetings list resource
    /// </summary>
    uri: string

    /// <summary>
    /// List of greetings
    /// </summary>
    records: DictionaryGreetingInfo[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: CallHandlingNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: CallHandlingPagingInfo
}

export default DictionaryGreetingList