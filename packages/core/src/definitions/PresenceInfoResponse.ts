import type ActiveCallInfo from './ActiveCallInfo';
import type GetPresenceExtensionInfo from './GetPresenceExtensionInfo';

interface PresenceInfoResponse {
  /**
   * Link to the presence resource
   * Format: uri
   */
  uri?: string;

  /**
   */
  userStatus?: 'Offline' | 'Busy' | 'Available';

  /**
   */
  dndStatus?:
    | 'TakeAllCalls'
    | 'DoNotAcceptDepartmentCalls'
    | 'TakeDepartmentCallsOnly'
    | 'DoNotAcceptAnyCalls'
    | 'Unknown';

  /**
   */
  message?: string;

  /**
   */
  allowSeeMyPresence?: boolean;

  /**
   * Configures the user presence visibility. When the `allowSeeMyPresence` parameter is set to 'True',
   *  the following visibility options are supported via this parameter - All, None, PermittedUsers
   */
  callerIdVisibility?: 'All' | 'None' | 'PermittedUsers';

  /**
   */
  ringOnMonitoredCall?: boolean;

  /**
   */
  pickUpCallsOnHold?: boolean;

  /**
   */
  activeCalls?: ActiveCallInfo[];

  /**
   */
  extension?: GetPresenceExtensionInfo;

  /**
   * Meetings presence status
   */
  meetingStatus?: 'Connected' | 'Disconnected';

  /**
   * Telephony presence status. Returned if telephony status is changed
   */
  telephonyStatus?: 'NoCall' | 'CallConnected' | 'Ringing' | 'OnHold' | 'ParkedCall';

  /**
   * Aggregated presence status, calculated from a number of sources
   */
  presenceStatus?: 'Offline' | 'Busy' | 'Available';
}

export default PresenceInfoResponse;
