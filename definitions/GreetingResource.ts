class GreetingResource
{
    /**
     * Enum: StartRecording, StopRecording, AutomaticRecording
     */
    type: string

    /**
     * 'Default' value specifies that all greetings of that type (in all languages) are default, if at least one greeting (in any language) of the specified type is custom, then 'Custom' value is returned.
     * Enum: Default, Custom
     */
    mode: string
}

export default GreetingResource