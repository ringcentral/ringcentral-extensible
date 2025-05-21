interface AccountGreetingLanguageInfoRequest {
  /**
   * Internal identifier of a greeting language
   * Required
   */
  id?: string;

  /**
   * Localization code of a greeting language
   * Required
   */
  localeCode?: string;
}

export default AccountGreetingLanguageInfoRequest;
