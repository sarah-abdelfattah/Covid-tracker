import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Registration, Login, Logout, Home } from './client/pages/index';
import { useUser, useStorageUpdate } from "./client/api/index"
import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { useAuth0 } from "@auth0/auth0-react";
// import { ReactQueryDevtools } from 'react-query/devtools'
//TODO: import styles index
import { QueryClient, QueryClientProvider } from 'react-query'
import axios from "axios";

const queryClient = new QueryClient()


// const fetchUser = async () => {
//   const result = await fetch(
//     "http://localhost:8080/")
//     .then((res) => res.json())
//     .then((json) => {
//       console.log("🚀 ~ file: App.jsx ~ line 27 ~ .then ~ json", json);
//     })
// }

function App() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    setToken()
    // callAPI()
  }, [isAuthenticated])

  const setToken = async () => {
    if (isAuthenticated) {
      let token = await getAccessTokenSilently()
      localStorage.setItem('token', token)
      // useStorageUpdate(token)
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {!isAuthenticated ?
          <Login /> :
          <div><Logout />
            <Home />
            {/* <button onClick={callAPI}>Get token</button> */}
          </div>
        }
      </div >
    </QueryClientProvider >
  );
}

export default App;
