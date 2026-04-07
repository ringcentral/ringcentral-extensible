import AddressBookBulkContactResource from "./AddressBookBulkContactResource.js";

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
