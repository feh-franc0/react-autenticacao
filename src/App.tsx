import {useContext} from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { FirstPage } from './pages/FirstPage';
import { SecondPage } from './pages/SecondPage';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { ThirdPage } from './pages/ThirdPage';
import { FourthPage } from './pages/FourthPage';

function App() {

  return (
    <div className="App">
      <Routes>

        {/* not found */}
        <Route path="*" element={<NotFound />} />

        {/* Login page */}
        <Route path="/" element={<Login />} />
        
        {/* primeira pagina */}
        <Route 
          path="/FirstPage" 
          element={
            <RequireAuth>
              <FirstPage />
            </RequireAuth>
          } 
        />
        
        {/*  segunda pagina */}
        <Route 
          path="/SecondPage" 
          element={
            <RequireAuth>
              <SecondPage />
            </RequireAuth>
          } 
        />
        
        {/*  terceia pagina */}
        <Route 
          path="/ThirdPage" 
          element={
            <RequireAuth>
              <ThirdPage />
            </RequireAuth>
          } 
        />
        
        {/* quarta pagina */}
        <Route 
          path="/FourthPage" 
          element={
            <RequireAuth>
              <FourthPage />
            </RequireAuth>
          } 
        />

      </Routes>
    </div>
  );
}

export default App;
