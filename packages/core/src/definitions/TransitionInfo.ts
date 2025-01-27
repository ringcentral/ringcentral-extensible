import ExtensionRegionalSettingRequest from "./ExtensionRegionalSettingRequest.js";

interface TransitionInfo {
  /**
   * Specifies if a welcome/activation email is sent to the new users
   *  (with the extension status transition from 'Unassigned' to 'NotActivated/Disabled')
   * Default: true
   */
  sendWelcomeEmail?: boolean;

  /** */
  regionalSettings?: ExtensionRegionalSettingRequest;
}

export default TransitionInfo;
