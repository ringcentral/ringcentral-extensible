import type BatchProvisionUsersResponseResultsExtension from "./BatchProvisionUsersResponseResultsExtension";
import type ApiErrorWithParameter from "./ApiErrorWithParameter";

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
