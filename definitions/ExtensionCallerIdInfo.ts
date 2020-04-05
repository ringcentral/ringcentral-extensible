import CallerIdByDevice from './CallerIdByDevice'
import CallerIdByFeature from './CallerIdByFeature'

class ExtensionCallerIdInfo
{
    /// <summary>
    /// Canonical URL of a caller ID resource
    /// </summary>
    uri: string

    /// <summary>
    /// </summary>
    byDevice: CallerIdByDevice[]

    /// <summary>
    /// </summary>
    byFeature: CallerIdByFeature[]

    /// <summary>
    /// If 'True', then user first name and last name will be used as caller ID when making outbound calls from extension
    /// </summary>
    extensionNameForOutboundCalls: boolean

    /// <summary>
    /// If 'True', then extension number will be used as caller ID when making internal calls
    /// </summary>
    extensionNumberForInternalCalls: boolean
}

export default ExtensionCallerIdInfo