import type OptOutBulkAssignFailedEntry from "./OptOutBulkAssignFailedEntry";

interface OptOutBulkAssignResponseOptOuts {
  /**
   * Recipients' phone numbers which opt-outs were successfully added for.
   * Example: +15551237755
   */
  successful?: string[];

  /**
   * Recipients' phone numbers which opt-outs were failed to be added for. Plus, error messages
   * Example: [object Object]
   */
  failed?: OptOutBulkAssignFailedEntry[];
}

export default OptOutBulkAssignResponseOptOuts;
