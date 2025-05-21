interface CommImsVoiceMailTerminatingTargetRequest {
  /**
   * Terminating target type
   * Required
   * Example: ImsVoiceMailTerminatingTarget
   */
  type?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget"
    | "ImsVoiceMailTerminatingTarget";
}

export default CommImsVoiceMailTerminatingTargetRequest;
