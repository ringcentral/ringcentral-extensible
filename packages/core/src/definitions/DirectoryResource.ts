import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type ContactResource from "./ContactResource.js";

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
