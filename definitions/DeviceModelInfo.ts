import DeviceAddonInfo from './DeviceAddonInfo'

class DeviceModelInfo
{
    /// <summary>
    /// Addon identifier. For HardPhones of certain types, which are compatible with this addon identifier
    /// </summary>
    id: string

    /// <summary>
    /// Device name
    /// </summary>
    name: string

    /// <summary>
    /// Addons description
    /// Required
    /// </summary>
    addons: DeviceAddonInfo[]

    /// <summary>
    /// Device feature or multiple features supported
    /// </summary>
    features: string[]
}

export default DeviceModelInfo