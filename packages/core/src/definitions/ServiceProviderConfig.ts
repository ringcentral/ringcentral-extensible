import AuthenticationScheme from './AuthenticationScheme';
import BulkSupported from './BulkSupported';
import Supported from './Supported';
import FilterSupported from './FilterSupported';

interface ServiceProviderConfig {
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
  schemas?: ('urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig')[];

  /**
   */
  sort?: Supported;

  /**
   */
  xmlDataFormat?: Supported;
}

export default ServiceProviderConfig;
