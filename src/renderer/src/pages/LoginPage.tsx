import { ReactElement } from 'react'
import { useNavigate } from 'react-router'

export default function LoginPage(): ReactElement {
  const navigate = useNavigate()
  return (
    <div>
      Login Page
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}
