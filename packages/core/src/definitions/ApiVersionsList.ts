import ApiVersionInfo from './ApiVersionInfo';

interface ApiVersionsList {
  /**
   * Canonical URI of the API version
   * Format: uri
   */
  uri?: string;

  /**
   * Full API version information: uri, number, release date
   */
  apiVersions?: ApiVersionInfo[];

  /**
   * Server version
   */
  serverVersion?: string;

  /**
   * Server revision
   */
  serverRevision?: string;
}

export default ApiVersionsList;
