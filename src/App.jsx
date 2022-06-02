import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import routes from '../routes'
import { Login } from '@/client/pages';
import { useAuth0 } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from 'react-query'
import { Main } from "@/client/layout";
import '@/client/styles'

const queryClient = new QueryClient()

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

            {!isAuthenticated ?
              <Route path="/" element={<Login />} /> :
              <>
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
              </>

            }
            <Route path="/" element={<Main />} />
            {/* <Route path='*' element={<ErrorPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div >
    </QueryClientProvider >
  );
}

export default App;
