import CallRecordingExtensionInfo from './CallRecordingExtensionInfo';
import PageNavigationModel from './PageNavigationModel';
import EnumeratedPagingModel from './EnumeratedPagingModel';

interface CallRecordingExtensions {
  /**
   * Link to call recording extension list resource
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: CallRecordingExtensionInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default CallRecordingExtensions;
