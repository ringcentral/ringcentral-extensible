import AuthenticationScheme from './AuthenticationScheme'
import BulkSupported from './BulkSupported'
import Supported from './Supported'
import FilterSupported from './FilterSupported'

class ServiceProviderConfig
{
    /**
     */
    authenticationSchemes?: AuthenticationScheme[]

    /**
     */
    bulk?: BulkSupported

    /**
     */
    changePassword?: Supported

    /**
     */
    etag?: Supported

    /**
     */
    filter?: FilterSupported

    /**
     */
    patch?: Supported

    /**
     */
    schemas?: string[]

    /**
     */
    sort?: Supported

    /**
     */
    xmlDataFormat?: Supported
}

export default ServiceProviderConfig