import OptOutBulkAssignFailedEntry from './OptOutBulkAssignFailedEntry';

interface OptOutBulkAssignResponseOptIns {
  /**
   * Recipients' phone numbers which opt-ins were successfully added for.
   * Example: +15551237799
   */
  successful?: string[];

  /**
   * Recipients' phone numbers which opt-ins were failed to be added for. Plus, error messages
   * Example: [object Object]
   */
  failed?: OptOutBulkAssignFailedEntry[];
}

export default OptOutBulkAssignResponseOptIns;
