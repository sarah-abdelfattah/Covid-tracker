import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import routes from '../routes'
import { useLogin } from "@/client/api"
import { Login } from '@/client/pages';
import { useAuth0 } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from 'react-query'
import { Main, Loading } from "@/client/layout";
import { ToastContainer } from 'react-toastify';

import '@/client/styles'

const queryClient = new QueryClient()

function App() {
  let isLoading = false

  return (
    <QueryClientProvider client={queryClient}>
      <>
        {isLoading ? <Loading /> : <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  name={route.name}
                  element={
                    <Main>
                      <route.element />
                    </Main>
                  }
                />
              ))}
              <Route path="/" element={<Main />} />
            </Routes>
          </BrowserRouter>
        </div >}
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
      </>
    </QueryClientProvider >
  );
}

export default App;
