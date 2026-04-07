import type RcwPagingModel from "./RcwPagingModel.js";
import type SessionGlobalListEntry from "./SessionGlobalListEntry.js";

interface WcsSessionGlobalListResource {
  /**
   * Required
   */
  records?: SessionGlobalListEntry[];

  /**
   * Required
   */
  paging?: RcwPagingModel;
}

export default WcsSessionGlobalListResource;
