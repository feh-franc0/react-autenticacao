import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { NavigateMenu } from "../NavigateMenu";

export const FirstPage = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <NavigateMenu />
      <h2>PRIMEIRA PAGINA - https://randomuser.me/</h2>

      Olá {auth.user?.name}, bem vindo!
    </div>
  );
}