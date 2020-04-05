class UserTransitionInfo
{
    /**
     * Specifies if an activation email is automatically sent to new users (Not Activated extensions) or not
     */
    sendWelcomeEmailsToUsers?: boolean

    /**
     * Supported for account confirmation. Specifies whether welcome email is sent
     */
    sendWelcomeEmail?: boolean
}

export default UserTransitionInfo