import type EmergencyLocationResource from './EmergencyLocationResource';
import type EmergencyLocationsPaging from './EmergencyLocationsPaging';

interface EmergencyLocationsResource {
  /**
   */
  records?: EmergencyLocationResource[];

  /**
   */
  paging?: EmergencyLocationsPaging;
}

export default EmergencyLocationsResource;
