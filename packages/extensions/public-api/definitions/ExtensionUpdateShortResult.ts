import {ErrorEntity} from './index';

class ExtensionUpdateShortResult {
  /**
   * Internal identifier of an extension
   */
  extensionId?: string;

  /**
   * Extension update status
   */
  status?: 'Fail' | 'Success';

  /**
   */
  errors?: ErrorEntity[];
}

export default ExtensionUpdateShortResult;
