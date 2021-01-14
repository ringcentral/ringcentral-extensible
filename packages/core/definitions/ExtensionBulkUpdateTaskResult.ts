import {ExtensionUpdateShortResult, ErrorEntity} from './index';

// Result record on multiple extension update task
class ExtensionBulkUpdateTaskResult {
  /**
   */
  affectedItems?: ExtensionUpdateShortResult[];

  /**
   */
  errors?: ErrorEntity[];
}

export default ExtensionBulkUpdateTaskResult;
