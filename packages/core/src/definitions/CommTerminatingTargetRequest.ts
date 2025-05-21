interface CommTerminatingTargetRequest {
  /**
   * Terminating target type
   * Required
   */
  type?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget"
    | "ImsVoiceMailTerminatingTarget";
}

export default CommTerminatingTargetRequest;
