/**
 * Information on account service plan
 */
interface ServiceInfoPlan {
  /**
   * Internal identifier of a service plan
   */
  id?: string;

  /**
   * Name of a service plan
   */
  name?: string;

  /**
   */
  freemiumProductType?: 'Freyja' | 'Phoenix';
}

export default ServiceInfoPlan;
