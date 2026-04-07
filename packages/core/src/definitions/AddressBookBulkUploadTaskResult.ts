import type AddressBookBulkUploadResource from "./AddressBookBulkUploadResource.js";
import type ErrorEntity from "./ErrorEntity.js";

interface AddressBookBulkUploadTaskResult {
  /**
   */
  affectedItems?: AddressBookBulkUploadResource[];

  /**
   */
  errors?: ErrorEntity[];
}

export default AddressBookBulkUploadTaskResult;
