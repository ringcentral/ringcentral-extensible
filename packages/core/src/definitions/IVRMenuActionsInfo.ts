import IvrMenuExtensionInfo from "./IvrMenuExtensionInfo.js";

interface IvrMenuActionsInfo {
    /**
   * Key pressed by the user
   */
  input?: ('0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'Hash' | 'Star' | 'NoInput');

  /**
   * Action to be taken on key press
   */
  action?: ('Connect' | 'Voicemail' | 'DialByName' | 'Transfer' | 'Repeat' | 'ReturnToRoot' | 'ReturnToPrevious' | 'Disconnect' | 'ReturnToTopLevelMenu' | 'DoNothing' | 'ConnectToOperator' | 'TransferToContactCenterNumber' | 'ConnectToIncomingCallRoutingSelection');

  /**
   */
  extension?: IvrMenuExtensionInfo;

  /**
   * For 'Transfer' action only. PSTN number in E.164 format
   */
  phoneNumber?: string;
}

export default IvrMenuActionsInfo;
