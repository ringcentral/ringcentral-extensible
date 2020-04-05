import PatchOperation from './PatchOperation'

class UserPatch
{
    /**
     * patch operations list
     * Required
     */
    Operations: PatchOperation[]

    /**
     * Required
     */
    schemas: string[]
}

export default UserPatch