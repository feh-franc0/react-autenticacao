import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";

export const Login = () => {
  const [user, setUser] = useState<User | null>(null);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const api = useApi();

  
  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('authToken');
      if(storageData) {
        const data = await api.valiateToken(storageData);
        if(data.user) {
          setUser(data.user);
          console.log("seu token é válido!")
          navigate('/FirstPage');
        }
      }
    }
    validateToken();
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if(email && password) {
      const isLogged = await auth.signin(email, password);
      if(isLogged) {
        navigate('/FirstPage');
      } else {
        alert("Não deu certo")
      }
    }
  }

  return (
    <div>
      <h2>Página Fechada</h2>

      <input 
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Digite seu e-mail"
      />
      <input 
        type="text" 
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Digite sua senha"
      />
      <button onClick={handleLogin}>Logar</button>
    </div>
  )
}