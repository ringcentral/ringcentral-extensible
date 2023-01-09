import DeviceResource from './DeviceResource';
import PagingInfo from './PagingInfo';

interface DevicesPaginationResource {
  /**
   */
  records?: DeviceResource[];

  /**
   */
  paging?: PagingInfo;
}

export default DevicesPaginationResource;
