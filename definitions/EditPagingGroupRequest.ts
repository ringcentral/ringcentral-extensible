class EditPagingGroupRequest
{
    /// <summary>
    /// List of users that will be allowed to page a group specified
    /// </summary>
    addedUserIds: string[]

    /// <summary>
    /// List of users that will be unallowed to page a group specified
    /// </summary>
    removedUserIds: string[]

    /// <summary>
    /// List of account devices that will be assigned to a paging group specified
    /// </summary>
    addedDeviceIds: string[]

    /// <summary>
    /// List of account devices that will be unassigned from a paging group specified
    /// </summary>
    removedDeviceIds: string[]
}

export default EditPagingGroupRequest