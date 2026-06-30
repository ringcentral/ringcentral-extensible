import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type ThreadMessageModel from "./ThreadMessageModel.js";

interface ThreadMessageList {
  /**
   * Required
   */
  records?: ThreadMessageModel[];

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default ThreadMessageList;
