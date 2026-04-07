import type RcwPagingModel from "./RcwPagingModel.js";
import type SessionGlobalResource from "./SessionGlobalResource.js";

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
