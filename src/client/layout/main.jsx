import React, { Suspense, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useLogin } from "@/client/api"
import { Header, HeaderLoading, Sidebar } from '@/client/components';

export const Main = ({ children }) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    setToken()
  }, [isAuthenticated])

  const setToken = async () => {
    if (isAuthenticated) {
      let token = await getAccessTokenSilently()
      useLogin(token)
    }
  }

  return (
    <div className="mainLayoutContainer">
      <Sidebar />

      <section>
        <Suspense fallback={<HeaderLoading />}>
          <Header />
        </Suspense>

        <main>
          {children}
        </main>
      </section>
    </div>
  )
}