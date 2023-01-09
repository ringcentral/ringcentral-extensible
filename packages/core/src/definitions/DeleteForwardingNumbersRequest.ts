import ForwardingNumberId from './ForwardingNumberId';

interface DeleteForwardingNumbersRequest {
  /**
   * List of forwarding number ids
   */
  records?: ForwardingNumberId[];
}

export default DeleteForwardingNumbersRequest;
