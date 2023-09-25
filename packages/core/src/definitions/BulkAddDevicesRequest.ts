import type BulkAddDevicesItem from './BulkAddDevicesItem';

interface BulkAddDevicesRequest {
  /**
   * Required
   */
  records?: BulkAddDevicesItem[];
}

export default BulkAddDevicesRequest;
