import IVRMenuPromptInfo from './IVRMenuPromptInfo'
import IVRMenuActionsInfo from './IVRMenuActionsInfo'

class IVRMenuInfo
{
    /// <summary>
    /// Internal identifier of an IVR Menu extension
    /// </summary>
    id: string

    /// <summary>
    /// Link to an IVR Menu extension resource
    /// </summary>
    uri: string

    /// <summary>
    /// First name of an IVR Menu user
    /// </summary>
    name: string

    /// <summary>
    /// Number of an IVR Menu extension
    /// </summary>
    extensionNumber: string

    /// <summary>
    /// Prompt metadata
    /// </summary>
    prompt: IVRMenuPromptInfo

    /// <summary>
    /// Keys handling settings
    /// </summary>
    actions: IVRMenuActionsInfo[]
}

export default IVRMenuInfo