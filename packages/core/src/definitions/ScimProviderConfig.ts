import ScimAuthenticationScheme from "./ScimAuthenticationScheme.js";
import ScimBulkSupported from "./ScimBulkSupported.js";
import ScimSupported from "./ScimSupported.js";
import ScimFilterSupported from "./ScimFilterSupported.js";

interface ScimProviderConfig {
  /** */
  authenticationSchemes?: ScimAuthenticationScheme[];

  /** */
  bulk?: ScimBulkSupported;

  /** */
  changePassword?: ScimSupported;

  /** */
  etag?: ScimSupported;

  /** */
  filter?: ScimFilterSupported;

  /** */
  patch?: ScimSupported;

  /** */
  schemas?: ("urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig")[];

  /** */
  sort?: ScimSupported;

  /** */
  xmlDataFormat?: ScimSupported;
}

export default ScimProviderConfig;
