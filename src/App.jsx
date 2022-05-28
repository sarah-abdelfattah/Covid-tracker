import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Registration, Login, Logout, Home } from './client/pages/index';
import { useUser, useUserTest } from "./client/api/index"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { ReactQueryDevtools } from 'react-query/devtools'
//TODO: import styles index
import { QueryClient, QueryClientProvider } from 'react-query'


// const client = new QueryClient({
//   defaultOptions: { queries: { refetchOnWindowFocus: false, staleTime: 5 * 60 * 100 } },
// })

const queryClient = new QueryClient()


const fetchUser = async () => {
  const result = await fetch(
    "http://localhost:3000/")
    .then((res) => res.json())
    .then((json) => {
      console.log("🚀 ~ file: App.jsx ~ line 27 ~ .then ~ json", json);

    })
  // const result = await fetch('https://localhost:3000/profile', {
  //   method: "GET",
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Content-Type": "text/plain"
  //   },
  //   mode: 'no-cors'
  // })
  // console.log("🚀 ~ file: App.jsx ~ line 24 ~ fetchUser ~ result", result.json());
  // return result.json()
}

function App() {
  // const { data: user } = useUser()
  // console.log("🚀 ~ file: App.jsx ~ line 14 ~ App ~ user", user);

  // const { data: userTest } = useUserTest()
  // console.log("🚀 ~ file: App.jsx ~ line 24 ~ App ~ userTest", userTest);

  console.log("🚀 ~ file: App.jsx ~ line 35 ~ App ~ fetchUser", fetchUser());
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/register" element={<Registration />} /> */}
          </Routes>
          {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
        </BrowserRouter>
      </div>

    </QueryClientProvider>
  );
}

export default App;
