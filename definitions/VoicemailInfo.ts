import RecipientInfo from './RecipientInfo'

class VoicemailInfo
{
    /// <summary>
    /// If 'True' then voicemails are allowed to be received
    /// </summary>
    enabled: boolean

    /// <summary>
    /// Recipient data
    /// </summary>
    recipient: RecipientInfo
}

export default VoicemailInfo