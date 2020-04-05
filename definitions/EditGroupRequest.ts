class EditGroupRequest
{
    /// <summary>
    /// List of users to be added to a team
    /// </summary>
    addedPersonIds: string[]

    /// <summary>
    /// List of user email addresses to be added to a team (i.e. as guests)
    /// </summary>
    addedPersonEmails: string[]

    /// <summary>
    /// List of users to be removed from a team
    /// </summary>
    removedPersonIds: string[]
}

export default EditGroupRequest