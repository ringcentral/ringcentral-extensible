class AdditionalCQInfo
{
    /**
     * Call information to be displayed as 'Line 2' for a call queue call session
     * Enum: PhoneNumberLabel, PhoneNumber, QueueExtension, QueueName, CallerIdName, CallerIdNumber, None
     */
    type: string

    /**
     * Call information value
     */
    value: string
}

export default AdditionalCQInfo