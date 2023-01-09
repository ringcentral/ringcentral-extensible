import CallRecordingExtensionInfo from './CallRecordingExtensionInfo';
import NavigationInfo from './NavigationInfo';
import EnumeratedPaging from './EnumeratedPaging';

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
  navigation?: NavigationInfo;

  /**
   */
  paging?: EnumeratedPaging;
}

export default CallRecordingExtensions;
