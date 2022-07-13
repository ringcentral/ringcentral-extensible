import UnifiedPresence from './UnifiedPresence';

interface UnifiedPresenceListEntry {
  /**
   * Internal identifier of the resource
   */
  resourceId?: string;

  /**
   * Status code of resource retrieval
   */
  status?: number;

  /**
   */
  body?: UnifiedPresence;
}

export default UnifiedPresenceListEntry;
