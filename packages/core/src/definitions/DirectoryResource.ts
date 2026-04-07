import EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import ContactResource from "./ContactResource.js";

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
