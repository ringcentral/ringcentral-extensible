import EmergencyLocationResource from './EmergencyLocationResource';
import EmergencyLocationsPaging from './EmergencyLocationsPaging';

interface EmergencyLocationsResource {
  /**
   */
  records?: EmergencyLocationResource[];

  /**
   */
  paging?: EmergencyLocationsPaging;
}

export default EmergencyLocationsResource;
