class PermissionIdResource
{
    /// <summary>
    /// </summary>
    uri: string

    /// <summary>
    /// </summary>
    id: string

    /// <summary>
    /// Site compatibility flag set for permission
    /// Enum: Compatible, Incompatible, Independent
    /// </summary>
    siteCompatible: string

    /// <summary>
    /// Specifies if the permission is editable on UI (if set to 'True') or not (if set to 'False')
    /// </summary>
    readOnly: boolean

    /// <summary>
    /// Specifies if the permission can be assigned by the account administrator
    /// </summary>
    assignable: boolean
}

export default PermissionIdResource