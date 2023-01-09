import DeviceResourceAccount from './DeviceResourceAccount';
import DeviceResourceSite from './DeviceResourceSite';
import DeviceResourceExtension from './DeviceResourceExtension';
import DeviceResourcePhoneNumber from './DeviceResourcePhoneNumber';

interface DeviceResource {
  /**
   */
  id?: string;

  /**
   */
  account?: DeviceResourceAccount;

  /**
   */
  phoneLineId?: string;

  /**
   */
  orderStatus?: ('InProgress' | 'PendingReplacement' | 'Delivered');

  /**
   */
  type?: string;

  /**
   */
  name?: string;

  /**
   */
  site?: DeviceResourceSite;

  /**
   */
  extension?: DeviceResourceExtension;

  /**
   */
  phoneNumber?: DeviceResourcePhoneNumber;

  /**
   */
  serial?: string;

  /**
   */
  assignedType?: ('AssignedUserPhone' | 'UnassignedUserPhone' | 'UnassignedPhone');
}

export default DeviceResource;
