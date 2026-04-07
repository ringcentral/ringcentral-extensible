/**
 * Query parameters for operation deleteExtension
 */
interface DeleteExtensionParameters {
  /**
   * If `true`, the digital lines from the deleted extension are saved in inventory.
   */
  savePhoneLines?: boolean;

  /**
   * If `true`, the phone numbers from the deleted extension are saved in inventory.
   * Default: true
   */
  savePhoneNumbers?: boolean;
}

export default DeleteExtensionParameters;
