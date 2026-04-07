import type WcsWebinarResource from "./WcsWebinarResource.js";
import type RcwPagingModel from "./RcwPagingModel.js";

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
