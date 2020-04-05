class OrderBy
{
    /**
     * Sorting priority index, starting from '1'. Optional if only one element in `orderBy` array is specified
     */
    index: number

    /**
     * Field name by which to sort the contacts
     * Enum: firstName, lastName, extensionNumber, phoneNumber, email
     */
    fieldName: string

    /**
     * Sorting direction
     * Enum: Asc, Desc
     */
    direction: string
}

export default OrderBy