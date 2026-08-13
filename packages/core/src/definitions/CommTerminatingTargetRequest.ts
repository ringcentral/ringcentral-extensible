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
    | "CloudConnectorTerminatingTarget";
}

export default CommTerminatingTargetRequest;
