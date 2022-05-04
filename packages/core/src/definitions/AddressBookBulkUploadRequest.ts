import AddressBookBulkUploadResource from './AddressBookBulkUploadResource';

class AddressBookBulkUploadRequest {
  /**
   * List of extensions which contacts have to be updated
   * Required
   */
  records?: AddressBookBulkUploadResource[];
}

export default AddressBookBulkUploadRequest;
