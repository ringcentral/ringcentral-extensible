import ParamsInfo from './ParamsInfo'
import ReasonInfo from './ReasonInfo'

class FeatureInfo
{
    /// <summary>
    /// Internal identifier of a feature
    /// </summary>
    id: string

    /// <summary>
    /// Specifies if the feature is available for the current user according to services enabled for the account, type, entitlements and permissions of the extension. If the authorized user gets features of the other extension, only features that can be delegated are returned (such as configuration by administrators).
    /// </summary>
    available: boolean

    /// <summary>
    /// </summary>
    params: ParamsInfo

    /// <summary>
    /// Reason of the feature unavailability. Returned only if `available` is set to 'false'
    /// </summary>
    reason: ReasonInfo
}

export default FeatureInfo