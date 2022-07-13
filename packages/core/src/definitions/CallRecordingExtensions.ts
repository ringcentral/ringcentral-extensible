import CallRecordingExtensionInfo from './CallRecordingExtensionInfo';
import CallHandlingNavigationInfo from './CallHandlingNavigationInfo';
import CallHandlingPagingInfo from './CallHandlingPagingInfo';

interface CallRecordingExtensions {
  /**
   * Link to call recording extension list resource
   */
  uri?: string;

  /**
   */
  records?: CallRecordingExtensionInfo[];

  /**
   */
  navigation?: CallHandlingNavigationInfo;

  /**
   */
  paging?: CallHandlingPagingInfo;
}

export default CallRecordingExtensions;
