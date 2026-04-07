import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface CommExtensionListResource {
  /**
   * Required
   */
  referencedExtensions?: CommReferencedExtensionResource[];

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default CommExtensionListResource;
