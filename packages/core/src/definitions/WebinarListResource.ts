import WcsWebinarResource from "./WcsWebinarResource.js";
import RcwPagingModel from "./RcwPagingModel.js";

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
