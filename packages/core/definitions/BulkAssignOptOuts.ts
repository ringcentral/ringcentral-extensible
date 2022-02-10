import {OptOutBulkAssignFailedEntry} from './index';

/**
 * Contains successfull and failed opt-outs
 */
class BulkAssignOptOuts {
  /**
   * Recipients' phone numbers which opt-outs were successfully added for.
   * Example: ["15551237755"]
   */
  successful?: string[];

  /**
   * Recipients' phone numbers which opt-outs were failed to be added for. Plus, error messages
   * Example: [object Object]
   */
  failed?: OptOutBulkAssignFailedEntry[];
}
export default BulkAssignOptOuts;
