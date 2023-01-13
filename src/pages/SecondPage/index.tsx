import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { NavigateMenu } from "../../components/NavigateMenu";
import imageCatNotFound from "./../../image/catHttpNotFound.png";

export const SecondPage = () => {
  const auth = useContext(AuthContext);
  
  const [searchText, setSearchText] = useState<String>('');

  const handleSearchCatHttp = (value: String) => {
    setSearchText(value);
    console.log(value);
  }

  return (
    <div>
      <NavigateMenu />
      <h2>SEGUNDA PAGINA - HTTP Cat </h2>

      <div>
        <div>
          <h2>Enjoy the kitty</h2>
          <input
            type="text" 
            placeholder="Search" 
            value={String(searchText)}
            onChange={e => handleSearchCatHttp(e.target.value)}
          />
          <hr />
          <img src={imageCatNotFound} alt="" />
        </div>
      </div>
    </div>
  );
}