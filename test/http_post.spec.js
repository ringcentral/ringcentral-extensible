/* eslint-env jest */
import RestClient from '../src/index'

jest.setTimeout(16000)

describe('HTTP POST', () => {
  test('send sms', async () => {
    const rc = new RestClient(process.env.RINGCENTRAL_CLIENT_ID, process.env.RINGCENTRAL_CLIENT_SECRET, process.env.RINGCENTRAL_SERVER_URL)
    await rc.authorize(process.env.RINGCENTRAL_USERNAME, process.env.RINGCENTRAL_EXTENSION, process.env.RINGCENTRAL_PASSWORD)
    const messageInfo = await rc.post('/restapi/v1.0/account/~/extension/~/sms', {
      from: {
        phoneNumber: process.env.RINGCENTRAL_USERNAME
      },
      to: [{
        phoneNumber: process.env.RINGCENTRAL_RECEIVER
      }],
      text: 'hello world'
    })
    expect(messageInfo).not.toBeUndefined()
    expect(messageInfo.id).not.toBeUndefined()
  })
})
