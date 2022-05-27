import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Registration, Login, Logout, Home } from './client/pages/index';
import { useAuth0 } from "@auth0/auth0-react";
// import { isError } from "react-query";

// import './Styles/index';

function App() {
  const { isLoading, error, isAuthenticated, user } = useAuth0();
  console.log("🚀 ~ file: App.jsx ~ line 14 ~ App ~ user", user);
  if (isLoading)
    console.log("Loading...")

  if (error)
    console.log("Oops .. an error occurred!", error)


  return (
    <div className="App">
      {isLoading ?
        <p>Loading....</p>
        : error ?
          <p>Oops .. an error occurred! </p>
          : isAuthenticated ?
            <div>
              <p>Authenticated</p>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  {/* <Route path="/register" element={<Registration />} /> */}
                </Routes>
              </BrowserRouter>
              <Logout />
            </div>
            :
            <Login />
      }
    </div>
  );
}

export default App;
