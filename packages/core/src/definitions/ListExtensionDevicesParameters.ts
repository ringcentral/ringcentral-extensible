/**
 * Query parameters for operation listExtensionDevices
*/
interface ListExtensionDevicesParameters {
  /**
   * The result set page number (1-indexed) to return
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 1
   * Default: 1
   */
  page?: number;

  /**
   * The number of items per page. If provided value in the request
 *  is greater than a maximum, the maximum value is applied
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 100
   * Default: 100
   */
  perPage?: number;

  /**
   * Pooling type of a device
   */
  linePooling?: ('Host' | 'Guest' | 'None');

  /**
   * Device feature
   */
  feature?: ('BLA' | 'CommonPhone' | 'Intercom' | 'Paging' | 'HELD');

  /**
   * Device type
   * Default: HardPhone
   */
  type?: ('HardPhone' | 'SoftPhone' | 'OtherPhone' | 'MobileDevice' | 'BLA' | 'Paging' | 'WebPhone' | 'Room');

  /**
   * The type of a phone line
   */
  lineType?: ('Unknown' | 'Standalone' | 'StandaloneFree' | 'BlaPrimary' | 'BlaSecondary');
}

export default ListExtensionDevicesParameters;
