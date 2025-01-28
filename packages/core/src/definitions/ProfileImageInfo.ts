import ProfileImageInfoURI from "./ProfileImageInfoURI";

/**
 * Information on profile image
 */
interface ProfileImageInfo {
  /**
   * Link to a profile image. If an image is not uploaded for an
   *  extension, only `uri` is returned
   * Required
   * Format: uri
   */
  uri?: string;

  /**
   * Identifier of an image
   */
  etag?: string;

  /**
   * Date/time when an image was last updated, in ISO 8601 format,
   *  for example 2016-03-10T18:07:52.534Z
   * Format: date-time
   */
  lastModified?: string;

  /**
   * The type of image
   */
  contentType?: string;

  /**
   * List of URIs to profile images in different dimensions
   */
  scales?: ProfileImageInfoURI[];
}

export default ProfileImageInfo;
