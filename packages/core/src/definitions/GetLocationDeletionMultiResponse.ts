import type LocationDeletionInfo from "./LocationDeletionInfo";

interface GetLocationDeletionMultiResponse {
  /** */
  deletion?: "Forbidden" | "Restricted" | "Allowed";

  /** */
  reassignment?: "Forbidden" | "Allowed";

  /** */
  emergencyLocations?: LocationDeletionInfo[];
}

export default GetLocationDeletionMultiResponse;
