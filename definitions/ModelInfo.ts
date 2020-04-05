import AddonInfo from './AddonInfo'

class ModelInfo
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
    addons: AddonInfo[]

    /// <summary>
    /// Device feature or multiple features supported
    /// </summary>
    features: string[]

    /// <summary>
    /// Max supported count of phone lines
    /// </summary>
    lineCount: number
}

export default ModelInfo