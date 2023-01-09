import OptOutBulkAssignResponseOptIns from './OptOutBulkAssignResponseOptIns';
import OptOutBulkAssignResponseOptOuts from './OptOutBulkAssignResponseOptOuts';

/**
 * The results of adding opt-outs and opt-ins
*/
interface OptOutBulkAssignResponse {
  /**
   * Contains successful and failed opt-ins
   */
  optIns?: OptOutBulkAssignResponseOptIns;

  /**
   * Contains successful and failed opt-outs
   */
  optOuts?: OptOutBulkAssignResponseOptOuts;
}

export default OptOutBulkAssignResponse;
