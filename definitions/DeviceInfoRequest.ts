class DeviceInfoRequest
{
    /// <summary>
    /// Device unique identifier, retrieved on previous session (if any)
    /// </summary>
    id: string

    /// <summary>
    /// Supported for iOS devices only. Certificate name (used by iOS applications for APNS subscription)
    /// </summary>
    appExternalId: string

    /// <summary>
    /// Supported for SoftPhone only. Computer name
    /// </summary>
    computerName: string

    /// <summary>
    /// Serial number for HardPhone; endpoint_id for softphone and mobile applications. Returned only when the phone is shipped and provisioned
    /// </summary>
    serial: string
}

export default DeviceInfoRequest