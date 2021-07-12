import {AddressBookBulkContactResource, ErrorEntity} from './index';

// Result record on adding multiple contacts to an extension. Returned for completed tasks
class AddressBookBulkUploadTaskResult {
  /**
   * Internal identifier of an extension
   */
  extensionId?: string;

  /**
   */
  contact?: AddressBookBulkContactResource;

  /**
   * Adding contact status
   */
  status?: 'Success' | 'Fail';

  /**
   */
  errors?: ErrorEntity[];
}
export default AddressBookBulkUploadTaskResult;
