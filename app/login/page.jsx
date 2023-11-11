'use client'

import Image from 'next/image'

export default function LoginPage() {
  const handleClick = () => {
    console.log('image was clicked')
  }

  return (
    <div className="h-screen w-full flex">
      <div className="m-auto w-full max-w-sm">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <div className="mb-4">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.png"
                alt="QR Code"
                layout="fill"
                className="rounded cursor-pointer"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
