'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Homepage() {
  const [isLoggedIn, setIsLoggedInt] = useState(false)

  const logoutUser = () => {
    setIsLoggedInt(false)
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-teal-500 to-blue-500">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome!</h1>

      {isLoggedIn ? (
        <div
          onClick={logoutUser}
          className="px-4 py-2 bg-white rounded-md text-teal-500 font-semibold"
        >
          Logout
        </div>
      ) : (
        <Link
          href="/login"
          className="px-4 py-2 bg-white rounded-md text-teal-500 font-semibold"
        >
          Go to Login
        </Link>
      )}
    </div>
  )
}
