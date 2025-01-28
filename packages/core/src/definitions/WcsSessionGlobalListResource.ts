import SessionGlobalListEntry from "./SessionGlobalListEntry";
import RcwPagingModel from "./RcwPagingModel";

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
