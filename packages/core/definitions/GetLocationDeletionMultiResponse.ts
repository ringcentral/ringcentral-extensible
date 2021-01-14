import {LocationDeletionInfo} from './index';

class GetLocationDeletionMultiResponse {
  /**
   */
  deletion?: 'Forbidden' | 'Restricted' | 'Allowed';

  /**
   */
  reassignment?: 'Forbidden' | 'Allowed';

  /**
   */
  emergencyLocations?: LocationDeletionInfo[];
}

export default GetLocationDeletionMultiResponse;
