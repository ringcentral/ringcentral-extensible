/**
 * Resource metadata
 */
interface ScimMeta {
  /**
   * Format: date-time
   */
  created?: string;

  /**
   * Format: date-time
   */
  lastModified?: string;

  /**
   * Resource location URI
   */
  location?: string;

  /**
   */
  resourceType?: 'User' | 'Group' | 'ResourceType' | 'Schema';
}

export default ScimMeta;
