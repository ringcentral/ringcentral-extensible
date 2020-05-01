import {
  CallRecordingExtensionInfo,
  CallHandlingNavigationInfo,
  CallHandlingPagingInfo,
} from '.';

class CallRecordingExtensions {
  /**
   * Link to call recording extension list resource
   */
  uri?: string;

  /**
   */
  records?: CallRecordingExtensionInfo[];

  /**
   * Information on navigation
   */
  navigation?: CallHandlingNavigationInfo;

  /**
   * Information on paging
   */
  paging?: CallHandlingPagingInfo;
}

export default CallRecordingExtensions;
