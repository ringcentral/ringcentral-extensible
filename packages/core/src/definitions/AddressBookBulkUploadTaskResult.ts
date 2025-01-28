import AddressBookBulkUploadResource from "./AddressBookBulkUploadResource";
import ErrorEntity from "./ErrorEntity";

interface AddressBookBulkUploadTaskResult {
  /** */
  affectedItems?: AddressBookBulkUploadResource[];

  /** */
  errors?: ErrorEntity[];
}

export default AddressBookBulkUploadTaskResult;
