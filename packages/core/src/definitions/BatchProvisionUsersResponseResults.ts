import BatchProvisionUsersResponseResultsExtension from "./BatchProvisionUsersResponseResultsExtension.js";
import ApiErrorWithParameter from "./ApiErrorWithParameter.js";

interface BatchProvisionUsersResponseResults {
  /**
   * Indicates if the provisioning operation was successful for this item, always `false` in this model
   */
  successful?: boolean;

  /** */
  extension?: BatchProvisionUsersResponseResultsExtension;

  /** */
  errors?: ApiErrorWithParameter[];
}

export default BatchProvisionUsersResponseResults;
