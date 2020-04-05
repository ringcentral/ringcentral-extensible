class ExtensionListEventBody
{
    /**
     * Internal identifier of an extension
     */
    extensionId?: string

    /**
     * Type of extension info change
     * Enum: Create, Update, Delete
     */
    eventType?: string

    /**
     * Internal identifier of a subscription owner extension
     */
    ownerId?: string
}

export default ExtensionListEventBody