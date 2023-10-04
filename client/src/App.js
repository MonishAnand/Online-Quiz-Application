
import { Button, Space } from 'antd';
import './stylesheets/theme.css'
import './stylesheets/alignment.css'
import './stylesheets/textelements.css'
import './stylesheets/custom-components.css'
import './stylesheets/form-elements.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/common/login';
import Register from './pages/common/register';
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/common/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         //user route
         <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
