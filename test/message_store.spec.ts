/* eslint-env jest */
import RestClient from '../src/index'

jest.setTimeout(64000)

describe('message store', () => {
  test('every inbound fax should have from info', async () => {
    const rc = new RestClient({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!
    })
    await rc.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!
    })
    const messageList = await rc.restapi().account().extension().messageStore().list({ messageType: ['Fax'], direction: ['Inbound'], dateFrom: '2015-04-15T17:18:00.000Z' })
    expect(messageList.records?.length).toBeGreaterThan(0)
    expect(messageList.records?.filter(r => 'from' in r).length).toBe(messageList.records?.length)
    const messageInfo = await rc.restapi().account().extension().messageStore(messageList.records?.[0].id?.toString()).get()
    expect(messageInfo.from).toBeDefined()
  })
})
