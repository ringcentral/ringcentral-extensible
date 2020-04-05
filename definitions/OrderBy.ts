class OrderBy
{
    /// <summary>
    /// Sorting priority index, starting from '1'. Optional if only one element in `orderBy` array is specified
    /// </summary>
    index: number

    /// <summary>
    /// Field name by which to sort the contacts
    /// Enum: firstName, lastName, extensionNumber, phoneNumber, email
    /// </summary>
    fieldName: string

    /// <summary>
    /// Sorting direction
    /// Enum: Asc, Desc
    /// </summary>
    direction: string
}

export default OrderBy