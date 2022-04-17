import { MissedCallExtensionInfo } from './index';

/**
 * Specifies behaviour for the missed call scenario. Returned only if `enabled` parameter of a voicemail is set to 'false'
 */
class MissedCallInfo {
  /**
   * Specifies the action that should be executed on a missed call. It can either be playing greeting message and disconnection, or sending call to a calling group. If 'ConnectToExtension' is set, then calling group extension should be specified
   */
  actionType?:
  | 'PlayGreetingAndDisconnect'
  | 'ConnectToExtension'
  | 'ConnectToExternalNumber';

  /**
   */
  extension?: MissedCallExtensionInfo;
}
export default MissedCallInfo;
