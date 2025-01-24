import type CreateConversationRequestMembers from "./CreateConversationRequestMembers";

interface CreateConversationRequest {
  /**
   * Identifier(s) of chat member(s). The maximum supported number
   *  of IDs is 15. User's own ID is optional. If `members` section is omitted
   *  then "Personal" chat will be returned
   * Required
   */
  members?: CreateConversationRequestMembers[];
}

export default CreateConversationRequest;
