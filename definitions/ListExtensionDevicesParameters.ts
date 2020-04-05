class ListExtensionDevicesParameters
{
    /// <summary>
    /// Pooling type of a device
    /// Enum: Host, Guest, None
    /// </summary>
    linePooling: string

    /// <summary>
    /// Device feature or multiple features supported
    /// Enum: Intercom, Paging, BLA, HELD
    /// </summary>
    feature: string
}

export default ListExtensionDevicesParameters