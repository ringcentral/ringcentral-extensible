import type CommCloudDestination from "./CommCloudDestination.js";

interface CommCloudConnectorTerminatingTargetResource {
  /**
   * Required
   */
  name?: string;

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
}

export default CommCloudConnectorTerminatingTargetResource;
