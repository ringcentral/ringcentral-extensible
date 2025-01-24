import type EnumeratedPagingModel from "./EnumeratedPagingModel";
import type ContactResource from "./ContactResource";

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
