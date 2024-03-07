import type JsValue from './JsValue';

/**
 * Recording information
 */
interface Recording {
  /**
   * Recording id
   * Required
   */
  id?: string;

  /**
   * Recording start time
   * Format: int64
   */
  startTime?: number;

  /**
   * Secure Link to the recording file
   */
  url?: string;

  /**
   */
  metadata?: JsValue;

  /**
   * Recording processing status
   */
  status?: 'Processing' | 'Processed' | 'Error' | 'Corrupted' | 'InProgress' | 'Purged' | 'Failed';

  /**
   * Availability status
   * Required
   */
  availabilityStatus?: 'Alive' | 'Deleted' | 'Purged' | 'NotAvailable';

  /**
   * During meeting AI team analyze code and after meeting finished generates text summary about this meeting
   */
  longSummary?: string;

  /**
   * During meeting AI team analyze code and after meeting finished generates text summary about this meeting
   */
  shortSummary?: string;

  /**
   * During meeting AI team analyze code and after meeting finished generates key words used in meeting
   */
  keywords?: string[];
}

export default Recording;
