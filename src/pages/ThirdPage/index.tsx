import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { NavigateMenu } from "../NavigateMenu";

export const ThirdPage = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <NavigateMenu />
      <h2>TERCEIRA PAGINA - Random Dog </h2>

      Olá {auth.user?.name}, bem vindo!
    </div>
  );
}