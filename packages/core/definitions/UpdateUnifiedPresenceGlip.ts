class UpdateUnifiedPresenceGlip {
  /**
   * Visibility setting allowing other users to see Glip presence status
   */
  visibility?: 'Visible' | 'Invisible';

  /**
   * Availability setting specifing whether to receive Glip notifications or not
   */
  availability?: 'Available' | 'DND';
}

export default UpdateUnifiedPresenceGlip;
