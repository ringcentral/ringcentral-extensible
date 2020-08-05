import RingCentral from '@rc-ex/core';

import {testRingCentral} from './utils';

describe('Update extension', () => {
  test('default', async () => {
    const testCase = async (rc: RingCentral) => {
      let extensionInfo = await rc.restapi().account().extension().get();
      const firstName = extensionInfo.contact?.firstName;
      const lastName = extensionInfo.contact?.lastName;

      await rc
        .restapi()
        .account()
        .extension()
        .put({
          contact: {
            lastName: 'lastName',
            firstName: 'firstName',
          },
        });
      extensionInfo = await rc.restapi().account().extension().get();
      expect(extensionInfo.contact?.firstName).toEqual('firstName');

      await rc.restapi().account().extension().put({
        contact: {
          lastName,
          firstName,
        },
      });
      extensionInfo = await rc.restapi().account().extension().get();
      expect(extensionInfo.contact?.firstName).toEqual(firstName);

      await rc.revoke();
    };
    await testRingCentral(testCase);
  });
});
