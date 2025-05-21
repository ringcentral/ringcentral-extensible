import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface CommExtensionListResource {
  /**
   * Required
   */
  referencedExtensions?: CommReferencedExtensionResource[];

  /** */
  paging?: EnumeratedPagingModel;
}

export default CommExtensionListResource;
