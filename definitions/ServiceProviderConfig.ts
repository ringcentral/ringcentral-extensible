import AuthenticationScheme from './AuthenticationScheme'
import BulkSupported from './BulkSupported'
import Supported from './Supported'
import FilterSupported from './FilterSupported'

class ServiceProviderConfig
{
    /// <summary>
    /// </summary>
    authenticationSchemes: AuthenticationScheme[]

    /// <summary>
    /// </summary>
    bulk: BulkSupported

    /// <summary>
    /// </summary>
    changePassword: Supported

    /// <summary>
    /// </summary>
    etag: Supported

    /// <summary>
    /// </summary>
    filter: FilterSupported

    /// <summary>
    /// </summary>
    patch: Supported

    /// <summary>
    /// </summary>
    schemas: string[]

    /// <summary>
    /// </summary>
    sort: Supported

    /// <summary>
    /// </summary>
    xmlDataFormat: Supported
}

export default ServiceProviderConfig