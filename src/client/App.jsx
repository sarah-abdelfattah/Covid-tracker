import { useState, useEffect, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import routes from '../../routes'
import { Main, Session } from "@/layout";
import { useIsAuthenticated } from '@/api';
import { Login } from '@/pages';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify';
import '@/styles'

const queryClient = new QueryClient()

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(useIsAuthenticated())

  useEffect(() => {
    setIsAuthenticated(useIsAuthenticated())
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/authenticate" element={<Session />} />
            {isAuthenticated ?
              <>{routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  name={route.name}
                  element={
                    <Main>
                      <Suspense fallback={<route.shimmer />}>
                        <route.element />
                      </Suspense>
                    </Main>
                  }
                />
              ))}</> :
              <Route path="/" element={<Login />} />
            }
          </Routes>
        </BrowserRouter>
      </div >
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </QueryClientProvider >
  );
}

export default App;
