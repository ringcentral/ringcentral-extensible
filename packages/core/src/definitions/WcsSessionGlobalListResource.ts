import type SessionGlobalListEntry from "./SessionGlobalListEntry";
import type RcwPagingModel from "./RcwPagingModel";

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
