class PatchOperation
{
    /// <summary>
    /// Required
    /// Enum: add, replace, remove
    /// </summary>
    op: string

    /// <summary>
    /// </summary>
    path: string

    /// <summary>
    /// corresponding 'value' of that field specified by 'path'
    /// </summary>
    value: string
}

export default PatchOperation