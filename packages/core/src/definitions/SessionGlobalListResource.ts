import type SessionGlobalResource from "./SessionGlobalResource.js";
import type RcwPagingModel from "./RcwPagingModel.js";

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
