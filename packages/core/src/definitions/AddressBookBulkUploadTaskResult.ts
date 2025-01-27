import AddressBookBulkUploadResource from "./AddressBookBulkUploadResource.js";
import ErrorEntity from "./ErrorEntity.js";

interface AddressBookBulkUploadTaskResult {
  /** */
  affectedItems?: AddressBookBulkUploadResource[];

  /** */
  errors?: ErrorEntity[];
}

export default AddressBookBulkUploadTaskResult;
