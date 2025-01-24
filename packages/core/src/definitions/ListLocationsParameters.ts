/**
 * Query parameters for operation listLocations
 */
interface ListLocationsParameters {
  /**
   * Sorts results by the property specified
   * Default: City
   */
  orderBy?: "Npa" | "City";

  /**
   * Indicates a page number to retrieve. Only positive number values
   *  are accepted
   * Format: int32
   * Default: 1
   */
  page?: number;

  /**
   * Indicates a page size (number of items)
   * Format: int32
   * Default: 100
   */
  perPage?: number;

  /**
   * Internal identifier of a state
   */
  stateId?: string;

  /**
   * Specifies if `nxx` codes are returned
   */
  withNxx?: boolean;
}

export default ListLocationsParameters;
