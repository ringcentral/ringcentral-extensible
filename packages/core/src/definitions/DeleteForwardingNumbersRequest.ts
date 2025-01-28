import ForwardingNumberId from "./ForwardingNumberId";

interface DeleteForwardingNumbersRequest {
  /**
   * List of forwarding number IDs
   */
  records?: ForwardingNumberId[];
}

export default DeleteForwardingNumbersRequest;
