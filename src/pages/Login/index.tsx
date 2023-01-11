import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
  }

  return (
    <div>
      <h2>Página Fechada</h2>

      <input 
        type="text"
        value={email}
        placeholder="Digite seu e-mail"
      />
      <input 
        type="text" 
        value={password}
        placeholder="Digite sua senha"
      />
      <button onClick={handleLogin}>Logar</button>
    </div>
  )
}