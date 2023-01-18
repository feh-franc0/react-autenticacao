import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { NavigateMenu } from "../../components/NavigateMenu";

export const FourthPage = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <NavigateMenu />

      
      <h2>QUARTA PAGINA - Crud </h2>

      <div>
        <strong>testando div</strong>
      </div>

      Olá {auth.user?.name}, bem vindo!
    </div>
  );
}