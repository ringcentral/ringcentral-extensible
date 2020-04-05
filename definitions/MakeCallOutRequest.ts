import MakeCallOutCallerInfoRequestFrom from './MakeCallOutCallerInfoRequestFrom'
import MakeCallOutCallerInfoRequestTo from './MakeCallOutCallerInfoRequestTo'

class MakeCallOutRequest
{
    /**
     * Required
     */
    from?: MakeCallOutCallerInfoRequestFrom

    /**
     * Required
     */
    to?: MakeCallOutCallerInfoRequestTo
}

export default MakeCallOutRequest