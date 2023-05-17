import ApiError from './ApiError';

interface DeleteDeviceFromInventoryResponseRecords {
  /**
   * Specifies if a device is successfully deleted
   */
  bulkItemSuccessful?: boolean;

  /**
   * Internal identifier of a device
   */
  deviceId?: string;

  /**
   * The list of errors occurred during processing of particular item of bulk operation.
 *  Returned only if `bulkItemSuccessful` is false
   */
  bulkItemErrors?: ApiError[];
}

export default DeleteDeviceFromInventoryResponseRecords;
