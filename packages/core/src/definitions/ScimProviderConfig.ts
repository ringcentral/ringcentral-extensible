import ScimAuthenticationScheme from "./ScimAuthenticationScheme";
import ScimBulkSupported from "./ScimBulkSupported";
import ScimSupported from "./ScimSupported";
import ScimFilterSupported from "./ScimFilterSupported";

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
