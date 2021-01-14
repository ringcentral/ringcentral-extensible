import {AddressBookBulkContactResource} from './index';

class AddressBookBulkUploadResource {
  /**
   * Internal identifier of an extension
   * Required
   */
  extensionId?: string;

  /**
   * List of contacts to be added to extension address book
   * Required
   */
  contacts?: AddressBookBulkContactResource[];
}

export default AddressBookBulkUploadResource;
