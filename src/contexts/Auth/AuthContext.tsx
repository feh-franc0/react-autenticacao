import { createContext } from "react";
import { User } from "../../types/User";

export type AuthContextType = {
  user: User | null;
  signin: (email: string, password: string) => Promise<boolean>;
  signout: () => void;
}
//* "null!" -> só vamos por algo no contexto no provider, então para n reclamar e n dar erro usamos o 'null!', para dizer q está vazio e parar de reclamar com o '!'
export const AuthContext = createContext<AuthContextType>(null!);