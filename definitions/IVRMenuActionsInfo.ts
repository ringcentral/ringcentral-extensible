import IVRMenuExtensionInfo from './IVRMenuExtensionInfo'

class IVRMenuActionsInfo
{
    /// <summary>
    /// Key. The following values are supported: numeric: '1' to '9' Star Hash NoInput
    /// </summary>
    input: string

    /// <summary>
    /// Internal identifier of an answering rule
    /// Enum: Connect, Voicemail, DialByName, Transfer, Repeat, ReturnToRoot, ReturnToPrevious, Disconnect
    /// </summary>
    action: string

    /// <summary>
    /// For 'Connect' or 'Voicemail' actions only. Extension reference
    /// </summary>
    extension: IVRMenuExtensionInfo

    /// <summary>
    /// For 'Transfer' action only. PSTN number in E.164 format
    /// </summary>
    phoneNumber: string
}

export default IVRMenuActionsInfo