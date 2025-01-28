import LocationDeletionErrorInfo from "./LocationDeletionErrorInfo";

interface LocationDeletionInfo {
  /** */
  id?: string;

  /** */
  name?: string;

  /**
   * Identifies the possibility and status of emergency location
   *  deletion
   */
  deletion?: "Failed" | "Completed" | "Forbidden" | "Restricted" | "Allowed";

  /** */
  errors?: LocationDeletionErrorInfo;
}

export default LocationDeletionInfo;
