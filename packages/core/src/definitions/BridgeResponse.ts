import type User from './User';
import type BridgePinsWithAliases from './BridgePinsWithAliases';
import type BridgeResponseSecurity from './BridgeResponseSecurity';
import type BridgePreferences from './BridgePreferences';
import type BridgeDiscovery from './BridgeDiscovery';

interface BridgeResponse {
  /**
   * Unique bridge identifier
   * Example: iad41-c04-ndb256065cf14ae6a1832389d9c2e
   */
  id?: string;

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
   * Example: Instant
   */
  type?: 'Instant' | 'Scheduled' | 'PMI';

  /**
   */
  host?: User;

  /**
   */
  pins?: BridgePinsWithAliases;

  /**
   */
  security?: BridgeResponseSecurity;

  /**
   */
  preferences?: BridgePreferences;

  /**
   */
  discovery?: BridgeDiscovery;
}

export default BridgeResponse;
