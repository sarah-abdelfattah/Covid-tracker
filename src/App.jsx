import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Registration, Login, Logout, Home } from './client/pages/index';
import { useAuth0 } from "@auth0/auth0-react";

// import './Styles/index';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {!isAuthenticated ?
        <Login /> :
        <div><Logout />
          <Home /> </div>

      }



      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter> */}
      <footer>
        <p>© {new Date().getFullYear()} | Sarah Abdelfattah</p>
      </footer>
    </div>
  );
}

export default App;
