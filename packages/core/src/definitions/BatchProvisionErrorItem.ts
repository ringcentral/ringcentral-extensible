import ApiErrorWithParameter from "./ApiErrorWithParameter.js";

interface BatchProvisionErrorItem {
  /**
   * Indicates if the provisioning operation was successful for this item, always `false` in this model
   * Required
   */
  successful?: boolean;

  /**
   * Required
   */
  errors?: ApiErrorWithParameter[];
}

export default BatchProvisionErrorItem;
