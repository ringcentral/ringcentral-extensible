import ForwardingNumberId from "./ForwardingNumberId.js";

interface DeleteForwardingNumbersRequest {
  /**
   * List of forwarding number IDs
   */
  records?: ForwardingNumberId[];
}

export default DeleteForwardingNumbersRequest;
