/* eslint-env jest */
import qs from 'qs'

jest.setTimeout(16000)

describe('query params', () => {
  test('npm qs', async () => {
    const params = { messageType: ['Fax', 'SMS', 'Voicemail'] }
    expect(qs.stringify(params)).toBe('messageType%5B0%5D=Fax&messageType%5B1%5D=SMS&messageType%5B2%5D=Voicemail')
    expect(qs.stringify(params, { indices: false })).toBe('messageType=Fax&messageType=SMS&messageType=Voicemail')
  })
})
