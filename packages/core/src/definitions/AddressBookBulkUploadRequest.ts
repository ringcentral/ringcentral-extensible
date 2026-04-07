import type AddressBookBulkUploadResource from "./AddressBookBulkUploadResource.js";

interface AddressBookBulkUploadRequest {
  /**
   * Required
   */
  records?: AddressBookBulkUploadResource[];
}

export default AddressBookBulkUploadRequest;
