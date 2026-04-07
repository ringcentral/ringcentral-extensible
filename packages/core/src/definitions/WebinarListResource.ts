import type RcwPagingModel from "./RcwPagingModel.js";
import type WcsWebinarResource from "./WcsWebinarResource.js";

interface WebinarListResource {
  /**
   * Required
   */
  records?: WcsWebinarResource[];

  /**
   * Required
   */
  paging?: RcwPagingModel;
}

export default WebinarListResource;
