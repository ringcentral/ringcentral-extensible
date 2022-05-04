import { CallRecordingExtensionInfo, CallHandlingNavigationInfo, CallHandlingPagingInfo } from './index';

class CallRecordingExtensions {
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
