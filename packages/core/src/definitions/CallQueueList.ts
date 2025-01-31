import CallQueueInfo from "./CallQueueInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface CallQueueList {
  /**
   * Link to a call queues resource
   * Required
   * Format: uri
   */
  uri?: string;

  /**
   * List of call queues
   * Required
   */
  records?: CallQueueInfo[];

  /**
   * Required
   */
  navigation?: PageNavigationModel;

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default CallQueueList;
