import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Registration, Login, Home } from './client/pages/index';
// import './Styles/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <p>© {new Date().getFullYear()} | Sarah Abdelfattah</p>
      </footer>
    </div>
  );
}

export default App;
