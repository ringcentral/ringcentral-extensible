interface CaiErrorCodeResponse {
  /**
   * Required
   */
  errorCode?:
    | 'CAI-101'
    | 'CAI-102'
    | 'CAI-103'
    | 'CAI-104'
    | 'CAI-105'
    | 'CAI-106'
    | 'CAI-107'
    | 'CAI-108'
    | 'CAI-109'
    | 'CAI-110';

  /**
   * Helpful description of the errorCode
   * Required
   */
  message?: string;

  /**
   * Name of parameter if specified in the message
   */
  parameterName?: string;
}

export default CaiErrorCodeResponse;
