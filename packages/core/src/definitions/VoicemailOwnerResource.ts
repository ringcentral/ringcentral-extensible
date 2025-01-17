/**
 * Voicemail owner information. Supported for shared voicemail messages only
 */
interface VoicemailOwnerResource {
  /**
   * Name of a voicemail owner
   */
  name?: string;

  /**
   * Internal identifier of an extension
   */
  extensionId?: string;
}

export default VoicemailOwnerResource;
