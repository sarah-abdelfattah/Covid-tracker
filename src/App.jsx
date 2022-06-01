import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Registration, Login, Logout, Home } from './client/pages/index';
import { useUser, useUserTest } from "./client/api/index"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useAuth0 } from "@auth0/auth0-react";
// import { ReactQueryDevtools } from 'react-query/devtools'
//TODO: import styles index
import { QueryClient, QueryClientProvider } from 'react-query'



const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, staleTime: 5 * 60 * 100 } },
})

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
  const { isAuthenticated } = useAuth0();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {!isAuthenticated ?
          <Login /> :
          <div><Logout />
            <Home /> </div>
        }
      </div >
    </QueryClientProvider >
  );
}

export default App;
