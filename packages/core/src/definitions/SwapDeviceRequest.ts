/**
 * Swap device request
*/
interface SwapDeviceRequest {
  /**
   * Internal identifier of a target device, to which the current one will be swapped
   * Example: 8459879873
   */
  targetDeviceId?: string;
}

export default SwapDeviceRequest;
