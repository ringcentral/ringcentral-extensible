class AutomaticLocationUpdatesModelInfo {
  /**
   * Device model identifier
   */
  id?: string;

  /**
   * Device name
   */
  name?: string;

  /**
   * Device feature or multiple features supported
   */
  features?: ('BLA' | 'Intercom' | 'Paging' | 'HELD')[];
}

export default AutomaticLocationUpdatesModelInfo;
