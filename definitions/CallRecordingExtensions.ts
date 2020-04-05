import CallRecordingExtensionInfo from './CallRecordingExtensionInfo'
import CallHandlingNavigationInfo from './CallHandlingNavigationInfo'
import CallHandlingPagingInfo from './CallHandlingPagingInfo'

class CallRecordingExtensions
{
    /// <summary>
    /// Link to call recording extension list resource
    /// </summary>
    uri: string

    /// <summary>
    /// </summary>
    records: CallRecordingExtensionInfo[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: CallHandlingNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: CallHandlingPagingInfo
}

export default CallRecordingExtensions