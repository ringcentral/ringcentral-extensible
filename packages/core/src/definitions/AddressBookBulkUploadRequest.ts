import AddressBookBulkUploadResource from "./AddressBookBulkUploadResource";

interface AddressBookBulkUploadRequest {
  /**
   * Required
   */
  records?: AddressBookBulkUploadResource[];
}

export default AddressBookBulkUploadRequest;
