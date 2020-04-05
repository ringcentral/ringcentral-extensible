class PatchOperation
{
    /**
     * Required
     * Enum: add, replace, remove
     */
    op?: string

    /**
     */
    path?: string

    /**
     * corresponding 'value' of that field specified by 'path'
     */
    value?: string
}

export default PatchOperation