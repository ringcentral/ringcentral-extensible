import BridgePins from './BridgePins';
import BridgeRequestSecurity from './BridgeRequestSecurity';
import BridgePreferences from './BridgePreferences';

interface CreateBridgeRequest {
  /**
   * Custom name of a bridge
   * Example: Weekly Meeting with Joseph
   */
  name?: string;

  /**
   * Type of a bridge. It specifies bridge life cycle.
 *  1) Instant - The bridge will be used for a meeting only once immediately after creation. Then it will be deleted.
 *  2) Scheduled - The bridge will be used for scheduled one or more meetings. If the bridge is not used for a long
 *  time after the last meeting, then it will be deleted.
 *  3) PMI - The bridge will contain Personal Meeting Identifier owned by a user. It is the default user bridge.
 *  Each user may have only one default (PMI) bridge. Such bridge will be deleted only in case the user is deleted
 *  from the system.
   * Default: Instant
   */
  type?: ('Instant' | 'Scheduled' | 'PMI');

  /**
   */
  pins?: BridgePins;

  /**
   */
  security?: BridgeRequestSecurity;

  /**
   */
  preferences?: BridgePreferences;
}

export default CreateBridgeRequest;
