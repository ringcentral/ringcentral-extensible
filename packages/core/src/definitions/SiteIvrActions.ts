import SiteIVRActionsExtensionInfo from "./SiteIVRActionsExtensionInfo";

/**
 * Keys handling settings
 */
interface SiteIvrActions {
  /** */
  input?: "Star" | "Hash" | "NoInput";

  /**
   * Key handling action:
   *  - Repeat - repeat menu greeting, for Star and Hash only;
   *  - ReturnToRoot - return to root IVR menu, for Star and Hash only;
   *  - ReturnToPrevious - return to previous IVR menu, for Star and Hash only;
   *  - Connect - connect to specific extension, for NoInput only;
   *  - Disconnect - end call, for NoInput only.
   */
  action?:
    | "Repeat"
    | "ReturnToRoot"
    | "ReturnToPrevious"
    | "ReturnToTopLevelMenu"
    | "Connect"
    | "Disconnect"
    | "DoNothing";

  /** */
  extension?: SiteIVRActionsExtensionInfo;
}

export default SiteIvrActions;
