import SiteIVRActionsExtensionInfo from "./SiteIVRActionsExtensionInfo.js";

/**
 * Keys handling settings
 */
interface SiteIvrActions {
  /** */
  input?: "Star" | "Hash" | "NoInput" | "0";

  /**
   * Key handling action:
   *  - Repeat - repeat menu greeting, for Star and Hash only;
   *  - ReturnToRoot - return to root IVR menu, for Star and Hash only;
   *  - ReturnToPrevious - return to previous IVR menu, for Star and Hash only;
   *  - Connect - connect to specific extension, for NoInput and "0" (zero) only;
   *  - Disconnect - end call, for NoInput only.
   */
  action?:
    | "Repeat"
    | "ReturnToRoot"
    | "ReturnToPrevious"
    | "ReturnToTopLevelMenu"
    | "Connect"
    | "ConnectToIncomingCallRoutingSelection"
    | "ConnectToOperator"
    | "Disconnect"
    | "DoNothing";

  /** */
  extension?: SiteIVRActionsExtensionInfo;
}

export default SiteIvrActions;
