import LocationDeletionInfo from "./LocationDeletionInfo.js";

interface GetLocationDeletionMultiResponse {
  /** */
  deletion?: "Forbidden" | "Restricted" | "Allowed";

  /** */
  reassignment?: "Forbidden" | "Allowed";

  /** */
  emergencyLocations?: LocationDeletionInfo[];
}

export default GetLocationDeletionMultiResponse;
