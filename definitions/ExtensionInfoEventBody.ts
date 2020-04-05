class ExtensionInfoEventBody
{
    /// <summary>
    /// Internal identifier of an extension
    /// </summary>
    extensionId: string

    /// <summary>
    /// Type of extension info change
    /// Enum: Update, Delete
    /// </summary>
    eventType: string

    /// <summary>
    /// Returned for 'Update' event type only. The possible values are: /nAccountInfo - change of account parameters/nExtensionInfo - change of contact info, service features, departments, status/nPhoneNumber - change of phone numbers/nRole - change of permissions/nProfileImage - change of profile image
    /// </summary>
    hints: string[]

    /// <summary>
    /// Internal identifier of a subscription owner extension
    /// </summary>
    ownerId: string
}

export default ExtensionInfoEventBody