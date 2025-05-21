interface CommImsVoiceMailTerminatingTargetResource {
  /**
   * Required
   */
  name?: string;

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

export default CommImsVoiceMailTerminatingTargetResource;
