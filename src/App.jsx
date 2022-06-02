import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect } from 'react'
import { Login, Logout, Home } from '@/client/pages';
import { useStorageUpdate } from "@/client/api"
import { useAuth0 } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from 'react-query'
//TODO: import styles index

const queryClient = new QueryClient()

function App() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    setToken()
  }, [isAuthenticated])

  const setToken = async () => {
    if (isAuthenticated) {
      let token = await getAccessTokenSilently()
      useStorageUpdate(token)
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {!isAuthenticated ?
          <Login /> :
          <div><Logout />
            <Home />
          </div>
        }
      </div >
    </QueryClientProvider >
  );
}

export default App;
