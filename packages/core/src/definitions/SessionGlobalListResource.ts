import SessionGlobalResource from "./SessionGlobalResource.js";
import RcwPagingModel from "./RcwPagingModel.js";

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
