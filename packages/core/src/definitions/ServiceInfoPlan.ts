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
   * Edition of a service plan
   */
  edition?: string;

  /**
   */
  freemiumProductType?: 'Freyja' | 'Phoenix';
}

export default ServiceInfoPlan;
