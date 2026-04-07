import type ContactResource from "./ContactResource.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface DirectoryResource {
  /**
   * Required
   */
  paging?: EnumeratedPagingModel;

  /**
   * Required
   */
  records?: ContactResource[];
}

export default DirectoryResource;
