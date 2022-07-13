/**
 * Extension profile image information. Not returned if profile images are absent for an extension
*/
interface CompanyDirectoryProfileImageInfo {
  /**
   * Link to a profile image resource
   */
  uri?: string;

  /**
   * Internal identifier of an image
   */
  etag?: string;
}

export default CompanyDirectoryProfileImageInfo;
