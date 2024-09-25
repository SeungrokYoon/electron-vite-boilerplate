import { ipcMain } from 'electron'

const invokeHandlers = [
  {
    channel: 'ping-invoke',
    handler: async (): Promise<string> => {
      return 'pong-handle'
    }
  }
]

export const registerMainHandler = (): void => {
  invokeHandlers.map(({ channel, handler }) => {
    ipcMain.handle(channel, handler)
  })
}
