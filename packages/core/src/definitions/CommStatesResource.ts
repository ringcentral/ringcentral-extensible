import type CommStateResource from "./CommStateResource.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface CommStatesResource {
  /**
   * Required
   */
  records?: CommStateResource[];

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default CommStatesResource;
