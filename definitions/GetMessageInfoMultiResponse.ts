import MessageBody from './MessageBody'

class GetMessageInfoMultiResponse
{
    /// <summary>
    /// Internal identifier of a resource
    /// </summary>
    resourceId: string

    /// <summary>
    /// Status code of resource retrieval
    /// </summary>
    status: number

    /// <summary>
    /// </summary>
    body: MessageBody
}

export default GetMessageInfoMultiResponse