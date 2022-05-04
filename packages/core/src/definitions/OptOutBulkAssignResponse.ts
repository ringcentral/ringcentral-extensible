import BulkAssignOptOuts from './BulkAssignOptOuts';
import BulkAssignOptIns from './BulkAssignOptIns';

/**
 * The results of adding opt-outs and opt-ins
*/
class OptOutBulkAssignResponse {
  /**
   */
  optOuts?: BulkAssignOptOuts;

  /**
   */
  optIns?: BulkAssignOptIns;
}

export default OptOutBulkAssignResponse;
