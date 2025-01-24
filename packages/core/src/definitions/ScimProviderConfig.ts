import type ScimAuthenticationScheme from "./ScimAuthenticationScheme";
import type ScimBulkSupported from "./ScimBulkSupported";
import type ScimSupported from "./ScimSupported";
import type ScimFilterSupported from "./ScimFilterSupported";

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
  schemas?: "urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig"[];

  /** */
  sort?: ScimSupported;

  /** */
  xmlDataFormat?: ScimSupported;
}

export default ScimProviderConfig;
