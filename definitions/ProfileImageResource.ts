import ScaledProfileImageResource from './ScaledProfileImageResource'

class ProfileImageResource
{
    /// <summary>
    /// </summary>
    uri: string

    /// <summary>
    /// </summary>
    etag: string

    /// <summary>
    /// </summary>
    contentType: string

    /// <summary>
    /// </summary>
    lastModified: string

    /// <summary>
    /// </summary>
    scales: ScaledProfileImageResource[]
}

export default ProfileImageResource