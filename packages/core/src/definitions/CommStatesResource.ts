import CommStateResource from "./CommStateResource.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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
