class ListExtensionDevicesParameters
{
  /**
   * Pooling type of a device
   */
  linePooling?: ('Host' | 'Guest' | 'None')

  /**
   * Device feature or multiple features supported
   */
  feature?: ('Intercom' | 'Paging' | 'BLA' | 'HELD')
}

export default ListExtensionDevicesParameters
