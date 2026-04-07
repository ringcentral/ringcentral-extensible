/**
 * Query parameters for operation readExtensionFeatures
 */
interface ReadExtensionFeaturesParameters {
  /**
   * Allows to filter features by availability for an extension
   */
  availableOnly?: boolean;

  /**
   * Internal identifier(s) of the feature(s)
   */
  featureId?: string[];
}

export default ReadExtensionFeaturesParameters;
