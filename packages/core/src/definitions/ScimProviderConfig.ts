import type ScimAuthenticationScheme from "./ScimAuthenticationScheme.js";
import type ScimBulkSupported from "./ScimBulkSupported.js";
import type ScimFilterSupported from "./ScimFilterSupported.js";
import type ScimSupported from "./ScimSupported.js";

interface ScimProviderConfig {
  /**
   */
  authenticationSchemes?: ScimAuthenticationScheme[];

  /**
   */
  bulk?: ScimBulkSupported;

  /**
   */
  changePassword?: ScimSupported;

  /**
   */
  etag?: ScimSupported;

  /**
   */
  filter?: ScimFilterSupported;

  /**
   */
  patch?: ScimSupported;

  /**
   */
  schemas?: "urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig"[];

  /**
   */
  sort?: ScimSupported;

  /**
   */
  xmlDataFormat?: ScimSupported;
}

export default ScimProviderConfig;
