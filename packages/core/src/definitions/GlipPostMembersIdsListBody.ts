import GlipMemberInfo from './GlipMemberInfo';

interface GlipPostMembersIdsListBody {
  /**
   * Identifier(s) of chat members.
   * Required
   */
  members?: GlipMemberInfo[];
}

export default GlipPostMembersIdsListBody;
