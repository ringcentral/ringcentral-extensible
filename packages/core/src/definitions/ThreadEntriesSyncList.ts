import type SyncInfoModel from "./SyncInfoModel.js";
import type ThreadEntrySyncItem from "./ThreadEntrySyncItem.js";

interface ThreadEntriesSyncList {
  /**
   * Required
   */
  records?: ThreadEntrySyncItem[];

  /**
   * Required
   */
  syncInfo?: SyncInfoModel;
}

export default ThreadEntriesSyncList;
