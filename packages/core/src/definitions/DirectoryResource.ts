import EnumeratedPagingModel from "./EnumeratedPagingModel";
import ContactResource from "./ContactResource";

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
