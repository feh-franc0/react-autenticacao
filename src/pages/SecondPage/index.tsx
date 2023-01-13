import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { NavigateMenu } from "../../components/NavigateMenu";

export const SecondPage = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <NavigateMenu />
      <h2>SEGUNDA PAGINA - HTTP Cat </h2>

      Olá {auth.user?.name}, bem vindo!
    </div>
  );
}