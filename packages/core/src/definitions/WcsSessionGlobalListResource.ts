import SessionGlobalListEntry from "./SessionGlobalListEntry.js";
import RcwPagingModel from "./RcwPagingModel.js";

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
