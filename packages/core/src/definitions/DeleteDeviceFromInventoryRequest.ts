import DeleteDeviceFromInventoryRequestRecords from "./DeleteDeviceFromInventoryRequestRecords.js";

interface DeleteDeviceFromInventoryRequest {
  /**
   * List of internal identifiers of the devices that should be deleted
   * Required
   */
  records?: DeleteDeviceFromInventoryRequestRecords[];
}

export default DeleteDeviceFromInventoryRequest;
