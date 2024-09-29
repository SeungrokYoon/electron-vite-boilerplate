import { Link } from 'react-router-dom'
import Versions from '../components/Versions'
import electronLogo from '../assets/electron.svg'

import { IpcListener, IpcEmitter } from '@electron-toolkit/typed-ipc/renderer'
import { useEffect } from 'react'

const ipc = new IpcListener<IpcRendererEvent>()
const emitter = new IpcEmitter<IpcEvents>()

function App(): JSX.Element {
  useEffect(() => {
    ipc.on('ready', (e, arg) => {
      console.log(arg) // handle the 'ready' event
    })
  }, [])

  const sendPingTest = (): void => {
    emitter.send('pingTest', 'Renderer Process sent pingTest')
  }

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={() => sendPingTest()}>
            Send IPC
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            onClick={async () => {
              const res = await emitter.invoke('say-hello')
              console.log(res)
            }}
          >
            Invoke to IPC Main Handler
          </a>
          <Link to={'/login'}>Move to Login</Link>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
