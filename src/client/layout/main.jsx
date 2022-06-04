import { Suspense, useEffect, useState } from 'react';
import { Header, HeaderLoading, Sidebar } from '@/client/components';
import { useIsAuthenticated } from '@/client/api';
import { useNavigate } from "react-router-dom"

export const Main = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(useIsAuthenticated())
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(useIsAuthenticated())
  }, [children])

  useEffect(() => {
    if (!isAuthenticated)
      navigate("../login", { replace: true });
  }, [isAuthenticated])

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