import type MessageThread from "./MessageThread.js";
import type SyncInfoModel from "./SyncInfoModel.js";

interface ThreadSyncList {
  /**
   * Required
   */
  records?: MessageThread[];

  /**
   * Required
   */
  syncInfo?: SyncInfoModel;
}

export default ThreadSyncList;
