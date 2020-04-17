import { ValidationError } from '.'

class SwitchValidated
{
  /**
   * Internal identifier of a switch
   */
  id?: string

  /**
   * Unique identifier of a network switch
   */
  chassisId?: string

  /**
   * Validation result status
   */
  status?: ('Valid' | 'Invalid')

  /**
   */
  errors?: ValidationError[]
}

export default SwitchValidated
