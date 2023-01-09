/**
 * Query parameters for operation listExtensionDevices
*/
interface ListExtensionDevicesParameters {
  /**
   * Pooling type of a device
   */
  linePooling?: ('Host' | 'Guest' | 'None');

  /**
   * Device feature or multiple features supported
   */
  feature?: ('Intercom' | 'Paging' | 'BLA' | 'HELD');

  /**
   * Number of a page to be returned
   * Default: 1
   */
  page?: string;

  /**
   * Number of records per page to be returned
   * Default: 100
   */
  perPage?: string;

  /**
   * Device type
   * Default: HardPhone
   */
  line?: ('Room' | 'SoftPhone' | 'OtherPhone' | 'HardPhone' | 'Paging' | 'WebRTC');

  /**
   * Type of phone line
   */
  lineType?: ('Standalone' | 'StandaloneFree' | 'BlaPrimary' | 'BlaSecondary');
}

export default ListExtensionDevicesParameters;
