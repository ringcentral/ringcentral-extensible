class ListAnsweringRulesParameters {
  /**
   * Default: Simple
   */
  view?: 'Detailed' | 'Simple';

  /**
   * If true, then only active call handling rules are returned
   */
  enabledOnly?: boolean;

  /**
   * Default: 1
   */
  page?: string;

  /**
   * Default: 100
   */
  perPage?: string;
}

export default ListAnsweringRulesParameters;
