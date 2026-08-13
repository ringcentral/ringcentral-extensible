import type CommCloudDestination from "./CommCloudDestination.js";

interface CommCloudConnectorTerminatingTargetRequest {
  /**
   * Terminating target type
   * Required
   * Example: CloudConnectorTerminatingTarget
   */
  type?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget"
    | "CloudConnectorTerminatingTarget";

  /**
   * Required
   */
  destination?: CommCloudDestination;

  /**
   * Required
   */
  dispatchingType?: "Ringing" | "Terminating";

  /**
   * The customised target name
   * Required
   */
  name?: string;
}

export default CommCloudConnectorTerminatingTargetRequest;
