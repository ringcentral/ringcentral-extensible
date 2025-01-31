import CallRecordingExtensionInfo from "./CallRecordingExtensionInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface CallRecordingExtensions {
  /**
   * Link to call recording extension list resource
   * Format: uri
   */
  uri?: string;

  /** */
  records?: CallRecordingExtensionInfo[];

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default CallRecordingExtensions;
