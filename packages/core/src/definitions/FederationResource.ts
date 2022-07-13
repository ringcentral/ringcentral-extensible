import FederatedAccountResource from './FederatedAccountResource';

interface FederationResource {
  /**
   */
  accounts?: FederatedAccountResource[];

  /**
   */
  creationTime?: string;

  /**
   */
  displayName?: string;

  /**
   */
  id?: string;

  /**
   */
  lastModifiedTime?: string;
}

export default FederationResource;
