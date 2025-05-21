import CallRecordingExtensionResource from "./CallRecordingExtensionResource.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface CallRecordingExtensions {
  /**
   * Link to call recording extension list resource
   * Format: uri
   */
  uri?: string;

  /** */
  records?: CallRecordingExtensionResource[];

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default CallRecordingExtensions;
