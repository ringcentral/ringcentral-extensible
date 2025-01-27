import FederatedAccountResource from "./FederatedAccountResource.js";

interface FederationResource {
  /** */
  accounts?: FederatedAccountResource[];

  /**
   * Format: date-time
   */
  creationTime?: string;

  /** */
  displayName?: string;

  /** */
  id?: string;

  /**
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   * Federation type
   */
  type?: "Regular" | "AdminOnly";
}

export default FederationResource;
