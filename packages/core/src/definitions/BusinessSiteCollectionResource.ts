import type RolesBusinessSiteResource from "./RolesBusinessSiteResource";

interface BusinessSiteCollectionResource {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  records?: RolesBusinessSiteResource[];
}

export default BusinessSiteCollectionResource;
