import type SessionGlobalResource from "./SessionGlobalResource";
import type RcwPagingModel from "./RcwPagingModel";

interface SessionGlobalListResource {
  /**
   * Required
   */
  records?: SessionGlobalResource[];

  /**
   * Required
   */
  paging?: RcwPagingModel;
}

export default SessionGlobalListResource;
