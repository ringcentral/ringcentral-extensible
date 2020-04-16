/* eslint-env jest */
import RestClient from '../src/index'

jest.setTimeout(16000)

describe('message store', () => {
  test('every inbound fax should have from info', async () => {
    const rc = new RestClient(process.env.RINGCENTRAL_CLIENT_ID, process.env.RINGCENTRAL_CLIENT_SECRET, process.env.RINGCENTRAL_SERVER_URL)
    await rc.authorize(process.env.RINGCENTRAL_USERNAME, process.env.RINGCENTRAL_EXTENSION, process.env.RINGCENTRAL_PASSWORD)
    const messageList = await rc.restapi().account().extension().messageStore().list({ messageType: 'Fax', direction: 'Inbound', dateFrom: '2015-04-15T17:18:00.000Z' })
    expect(messageList.records.length).toBeGreaterThan(0)
    expect(messageList.records.filter(r => 'from' in r).length).toBe(messageList.records.length)
  })
})
