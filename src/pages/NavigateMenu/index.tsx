import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const  NavigateMenu = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate('/');
  }

  return(
    <div>
      <h1>Logo Menu</h1>
      
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to="/FirstPage">FirstPage</Link>
          <Link to="/SecondPage">SecondPage</Link>
          <Link to="/ThirdPage">ThirdPage</Link>
          <Link to="/FourthPage">FourthPage</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header>
      <hr />
    </div>
  )
}