import JsValue from './JsValue';

/**
 * Recording information
*/
interface Recording {
  /**
   * recording id
   */
  id?: string;

  /**
   * recording start time
   * Format: int64
   */
  startTime?: number;

  /**
   * recording url
   */
  contentUri?: string;

  /**
   */
  metadata?: JsValue;

  /**
   * recording status
   */
  status?: ('Processing' | 'Processed' | 'Error' | 'Corrupted' | 'InProgress');

  /**
   * availability status
   * Required
   */
  availabilityStatus?: ('Alive' | 'Deleted' | 'Purged' | 'NotAvailable');
}

export default Recording;
