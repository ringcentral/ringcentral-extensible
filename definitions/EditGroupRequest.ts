class EditGroupRequest
{
    /**
     * List of users to be added to a team
     */
    addedPersonIds: string[]

    /**
     * List of user email addresses to be added to a team (i.e. as guests)
     */
    addedPersonEmails: string[]

    /**
     * List of users to be removed from a team
     */
    removedPersonIds: string[]
}

export default EditGroupRequest