import PromptInfo from './PromptInfo'
import CallHandlingNavigationInfo from './CallHandlingNavigationInfo'
import CallHandlingPagingInfo from './CallHandlingPagingInfo'

class IVRPrompts
{
    /// <summary>
    /// Link to prompts library resource
    /// </summary>
    uri: string

    /// <summary>
    /// List of Prompts
    /// </summary>
    records: PromptInfo[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: CallHandlingNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: CallHandlingPagingInfo
}

export default IVRPrompts