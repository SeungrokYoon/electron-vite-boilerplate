// IPC events handled in Main process
type IpcEvents =
  | {
      pingTest: [string] // listener event map
    }
  | {
      'say-hello': () => string // handler event map
    }

// IPC events handled in Renderer process
type IpcRendererEvent = {
  ready: [string]
}
