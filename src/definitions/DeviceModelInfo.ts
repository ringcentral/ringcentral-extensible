import DeviceAddonInfo from './DeviceAddonInfo'

class DeviceModelInfo
{
    /**
     * Addon identifier. For HardPhones of certain types, which are compatible with this addon identifier
     */
    id?: string

    /**
     * Device name
     */
    name?: string

    /**
     * Addons description
     * Required
     */
    addons?: DeviceAddonInfo[]

    /**
     * Device feature or multiple features supported
     */
    features?: string[]
}

export default DeviceModelInfo