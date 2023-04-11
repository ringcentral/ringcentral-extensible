import SessionLivestreamMinimalModel from './SessionLivestreamMinimalModel';

interface SessionLivestreamListModel {
  /**
   * The list of livestreams configured for the session
   */
  livestreams?: SessionLivestreamMinimalModel[];
}

export default SessionLivestreamListModel;
