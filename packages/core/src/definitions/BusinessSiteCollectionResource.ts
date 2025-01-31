import RolesBusinessSiteResource from "./RolesBusinessSiteResource.js";

interface BusinessSiteCollectionResource {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  records?: RolesBusinessSiteResource[];
}

export default BusinessSiteCollectionResource;
