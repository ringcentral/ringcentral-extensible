import type AddressBookBulkContactResource from './AddressBookBulkContactResource';

interface AddressBookBulkUploadResource {
  /**
   * Required
   */
  extensionId?: string;

  /**
   * Required
   */
  contacts?: AddressBookBulkContactResource[];
}

export default AddressBookBulkUploadResource;
