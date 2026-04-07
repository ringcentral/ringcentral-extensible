interface OrderBy {
  /**
   * Sorting priority index, starting from '1'. Optional if only one element in `orderBy` array is specified
   * Format: int32
   * Example: 1
   * Default: 1
   */
  index?: number;

  /**
   * Field name by which to sort the contacts
   * Example: department
   */
  fieldName?:
    | "firstName"
    | "lastName"
    | "extensionNumber"
    | "phoneNumber"
    | "email"
    | "jobTitle"
    | "department";

  /**
   * Sorting direction
   * Example: Asc
   * Default: Asc
   */
  direction?: "Asc" | "Desc";
}

export default OrderBy;
