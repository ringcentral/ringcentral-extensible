import TMCompleteTaskRequestAssignees from "./TMCompleteTaskRequestAssignees.js";

interface TMCompleteTaskRequest {
  /**
   * Completeness status
   */
  status?: "Incomplete" | "Complete";

  /** */
  assignees?: TMCompleteTaskRequestAssignees[];

  /**
   * Maximum: 100
   * Format: int32
   */
  completenessPercentage?: number;
}

export default TMCompleteTaskRequest;
