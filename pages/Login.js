import { useState } from 'react'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login')

      if (res.ok) {
        window.location.href = '/'
      } else {
        throw new Error('Login failed')
      }
    } catch (err) {
      console.error(err)
      alert('Error logging in')
    }

    setLoading(false)
  }

  return (
    <div>
      <h1>Login</h1>
      <button disabled={loading} onClick={handleLogin}>
        {loading ? 'Loading...' : 'Login with LNURL'}
      </button>
    </div>
  )
}
