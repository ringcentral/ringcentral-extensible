class ServiceFeatureValue {
  /**
   */
  featureName?: string;

  /**
   */
  enabled?: boolean;

  /**
   */
  reason?:
    | 'Available'
    | 'AccountTypeLimitation'
    | 'ExtensionTypeLimitation'
    | 'AccountLimitation'
    | 'ExtensionLimitation'
    | 'InsufficientPermissions'
    | 'ApplicationLimitation';
}

export default ServiceFeatureValue;
