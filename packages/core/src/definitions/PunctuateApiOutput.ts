import type PunctuateApiResponse from './PunctuateApiResponse';

interface PunctuateApiOutput {
  /**
   */
  status?: 'Success' | 'Fail';

  /**
   */
  response?: PunctuateApiResponse;
}

export default PunctuateApiOutput;
