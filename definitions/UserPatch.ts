import PatchOperation from './PatchOperation'

class UserPatch
{
    /// <summary>
    /// patch operations list
    /// Required
    /// </summary>
    Operations: PatchOperation[]

    /// <summary>
    /// Required
    /// </summary>
    schemas: string[]
}

export default UserPatch