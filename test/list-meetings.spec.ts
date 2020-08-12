import {createRingCentral} from './utils';

describe('list meetings', () => {
  test('default', async () => {
    const rc = await createRingCentral();
    const meetingList = await rc
      .restapi()
      .account()
      .extension()
      .meeting()
      .list();
    expect(meetingList).not.toBeUndefined();
    expect(meetingList.records).not.toBeUndefined();
    await rc.revoke();
  });
});
