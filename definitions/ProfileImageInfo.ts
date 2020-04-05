import ProfileImageInfoURI from './ProfileImageInfoURI'

class ProfileImageInfo
{
    /// <summary>
    /// Link to a profile image. If an image is not uploaded for an extension, only uri is returned
    /// Required
    /// </summary>
    uri: string

    /// <summary>
    /// Identifier of an image
    /// </summary>
    etag: string

    /// <summary>
    /// The datetime when an image was last updated in ISO 8601 format, for example 2016-03-10T18:07:52.534Z
    /// </summary>
    lastModified: string

    /// <summary>
    /// The type of an image
    /// </summary>
    contentType: string

    /// <summary>
    /// List of URIs to profile images in different dimensions
    /// </summary>
    scales: ProfileImageInfoURI[]
}

export default ProfileImageInfo