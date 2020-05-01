import {
  AuthenticationScheme,
  BulkSupported,
  Supported,
  FilterSupported,
} from '.';

class ServiceProviderConfig {
  /**
   */
  authenticationSchemes?: AuthenticationScheme[];

  /**
   */
  bulk?: BulkSupported;

  /**
   */
  changePassword?: Supported;

  /**
   */
  etag?: Supported;

  /**
   */
  filter?: FilterSupported;

  /**
   */
  patch?: Supported;

  /**
   */
  schemas?: 'urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig'[];

  /**
   */
  sort?: Supported;

  /**
   */
  xmlDataFormat?: Supported;
}

export default ServiceProviderConfig;
