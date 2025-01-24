interface AddPhoneNumberRequestItem {
  /**
   * Phone number in e.164 format (with '+' prefix).
   *  Wildcards are supported to pass large sets (for example 100 numbers);
   *  only one phone number record must be passed in request in that case, for example '+1650123456*'
   * Required
   */
  phoneNumber?: string;

  /**
   * Usage type of phone number. Currently, we support the following values: `Inventory`, `InventoryPartnerBusinessMobileNumber`
   *  and `PartnerBusinessMobileNumber`. Later we may support some other values like `ForwardedNumber`, etc.
   * Required
   * Default: Inventory
   */
  usageType?:
    | "Inventory"
    | "InventoryPartnerBusinessMobileNumber"
    | "PartnerBusinessMobileNumber";

  /**
   * Phone number activation status. Determine whether phone number migration is completed on the partner side.
   */
  activationStatus?: "Active" | "Inactive";
}

export default AddPhoneNumberRequestItem;
