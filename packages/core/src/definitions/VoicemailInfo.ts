import RecipientInfo from "./RecipientInfo";

/**
 * Specifies whether to take a voicemail and who should do it
 */
interface VoicemailInfo {
  /**
   * If `true` then voicemails are allowed to be received
   */
  enabled?: boolean;

  /** */
  recipient?: RecipientInfo;
}

export default VoicemailInfo;
