import CallRecordingExtensionInfo from './CallRecordingExtensionInfo'
import CallHandlingNavigationInfo from './CallHandlingNavigationInfo'
import CallHandlingPagingInfo from './CallHandlingPagingInfo'

class CallRecordingExtensions
{
    /**
     * Link to call recording extension list resource
     */
    uri?: string

    /**
     */
    records?: CallRecordingExtensionInfo[]

    /**
     * Information on navigation
     */
    navigation?: CallHandlingNavigationInfo

    /**
     * Information on paging
     */
    paging?: CallHandlingPagingInfo
}

export default CallRecordingExtensions