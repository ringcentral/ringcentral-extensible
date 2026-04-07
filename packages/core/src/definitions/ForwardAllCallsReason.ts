interface ForwardAllCallsReason {
  /**
   * Specifies the type of limitation. `ExtensionLimitation` means that the feature is turned off for this particular extension.
   *  `FeatureLimitation` means that the user may enable this feature and setup the rule via the Service Web UI
   */
  code?: "ExtensionLimitation" | "FeatureLimitation";

  /**
   * Error message depending on the type of limitation
   */
  message?: string;
}

export default ForwardAllCallsReason;
