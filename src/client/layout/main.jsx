import { Suspense } from 'react';
import { Header, HeaderLoading, Sidebar } from '@/client/components';

export const Main = ({ children }) => {

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