import { RecipientInfo } from '.'

class VoicemailInfo
{
  /**
   * If 'True' then voicemails are allowed to be received
   */
  enabled?: boolean

  /**
   * Recipient data
   */
  recipient?: RecipientInfo
}

export default VoicemailInfo
