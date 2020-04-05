class ListExtensionDevicesParameters
{
    /**
     * Pooling type of a device
     * Enum: Host, Guest, None
     */
    linePooling?: string

    /**
     * Device feature or multiple features supported
     * Enum: Intercom, Paging, BLA, HELD
     */
    feature?: string
}

export default ListExtensionDevicesParameters