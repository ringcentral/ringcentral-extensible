import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type MessageThread from "./MessageThread.js";

interface MessageThreadList {
  /**
   * Required
   */
  records?: MessageThread[];

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default MessageThreadList;
