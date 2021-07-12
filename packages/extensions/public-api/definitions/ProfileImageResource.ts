import {ScaledProfileImageResource} from './index';

class ProfileImageResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  etag?: string;

  /**
   */
  contentType?: string;

  /**
   * Format: date-time
   */
  lastModified?: string;

  /**
   */
  scales?: ScaledProfileImageResource[];
}

export default ProfileImageResource;
