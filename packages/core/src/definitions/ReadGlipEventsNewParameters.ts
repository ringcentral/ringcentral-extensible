/**
 * Query parameters for operation readGlipEventsNew
 */
interface ReadGlipEventsNewParameters {
  /**
   * Number of groups to be fetched by one request. The maximum value is 250, by default - 30.
   * Maximum: 250
   * Format: int32
   * Default: 30
   */
  recordCount?: number;

  /**
   * Token of a page to be returned
   */
  pageToken?: string;
}

export default ReadGlipEventsNewParameters;
