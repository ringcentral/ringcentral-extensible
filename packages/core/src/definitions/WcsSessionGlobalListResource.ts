import type SessionGlobalListEntry from "./SessionGlobalListEntry.js";
import type RcwPagingModel from "./RcwPagingModel.js";

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
