import ExtensionInfoGrants from './ExtensionInfoGrants'

class GrantInfo
{
    /// <summary>
    /// Canonical URI of a grant
    /// </summary>
    uri: string

    /// <summary>
    /// Extension information
    /// </summary>
    extension: ExtensionInfoGrants

    /// <summary>
    /// Specifies if picking up of other extensions' calls is allowed for the extension. If 'Presence' feature is disabled for the given extension, the flag is not returned
    /// </summary>
    callPickup: boolean

    /// <summary>
    /// Specifies if monitoring of other extensions' calls is allowed for the extension. If 'CallMonitoring' feature is disabled for the given extension, the flag is not returned
    /// </summary>
    callMonitoring: boolean

    /// <summary>
    /// Specifies whether the current extension is able to make or receive calls on behalf of the user referenced in extension object
    /// </summary>
    callOnBehalfOf: boolean

    /// <summary>
    /// Specifies whether the current extension can delegate a call to the user referenced in extension object
    /// </summary>
    callDelegation: boolean

    /// <summary>
    /// Specifies whether the current extension is allowed to call Paging Only group referenced to in extension object
    /// </summary>
    groupPaging: boolean

    /// <summary>
    /// Specifies whether the current extension is assigned as a Full-Access manager in the call queue referenced in extension object
    /// </summary>
    callQueueSetup: boolean

    /// <summary>
    /// Specifies whether the current extension is assigned as a Members-Only manager in the call queue referenced in extension object
    /// </summary>
    callQueueMembersSetup: boolean
}

export default GrantInfo