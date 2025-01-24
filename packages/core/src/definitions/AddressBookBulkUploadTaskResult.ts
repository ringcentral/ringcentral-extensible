import type AddressBookBulkUploadResource from "./AddressBookBulkUploadResource";
import type ErrorEntity from "./ErrorEntity";

interface AddressBookBulkUploadTaskResult {
  /** */
  affectedItems?: AddressBookBulkUploadResource[];

  /** */
  errors?: ErrorEntity[];
}

export default AddressBookBulkUploadTaskResult;
