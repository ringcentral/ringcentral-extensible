import CreateGlipMember from './CreateGlipMember';

interface GlipPostMembersListBody {
  /**
   * List of glip members
   * Required
   */
  members?: CreateGlipMember[];
}

export default GlipPostMembersListBody;
