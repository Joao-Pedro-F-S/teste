'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { signOut, useSession } from 'next-auth/react'

const UserSession = () => {
  const { data: session } = useSession()

  function handleLoad(event: React.SyntheticEvent<HTMLImageElement>): void {
    const target = event.target as HTMLImageElement
    target.style.opacity = '1'
  }

  return (
    <Fragment>
      {session && session?.user ? (
        <Fragment>
          <span className="font-semibold text-primary-700">
            {session?.user?.name || session?.user?.username}
          </span>

          {session?.user?.image ? (
            <Image
              className="m-2 h-10 w-10 rounded-full"
              onLoad={handleLoad}
              alt="avatar"
              src={session?.user?.image}
              priority
              width={50}
              height={50}
            />
          ) : (
            <Image
              className="m-2 h-10 w-10 rounded-full"
              onLoad={handleLoad}
              alt="avatar"
              src={`https://avatars.dicebear.com/api/initials/${session?.user.email}.svg`}
              priority
              width={50}
              height={50}
            />
          )}

          <button
            className="mx-8 flex h-10 w-20 items-center justify-center rounded-full border border-primary-700 bg-primary-700 text-base text-white transition-all hover:bg-transparent hover:text-primary-700 md:m-0 md:ml-2"
            onClick={() => signOut()}
          >
            Sair
          </button>
        </Fragment>
      ) : (
        <Link
          href="/views/login"
          className="mx-8 flex h-10 w-40 items-center justify-center rounded-full border border-primary-700 bg-primary-700 text-base text-white transition-all hover:bg-transparent hover:text-primary-700 md:m-0 md:ml-8"
        >

          
          Iniciar a Sessão


        </Link>
      )}
    </Fragment>
  )
}

export default UserSession
