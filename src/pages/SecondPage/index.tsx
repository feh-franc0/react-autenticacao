import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../contexts/Auth/AuthContext";
import { NavigateMenu } from "../../components/NavigateMenu";
import imageCatNotFound from "./../../image/catHttpNotFound.jpeg";

export const SecondPage = () => {

      const [code, setCode] = useState('');
      const navigate = useNavigate();

      return (
        <div className="cat-main-container">
          
            <h2>SEGUNDA PAGINA - HTTP Cat </h2>
            <NavigateMenu />

            <div className="cat-container">
            <img
            src={code ? `https://http.cat/${code}` : imageCatNotFound}
            alt="cat"
            />
            <label htmlFor="status-code">
              Digite um status code HTTP
              <input 
              type="number" 
              placeholder="Ex. 200, 201, 202..." 
              name="status-code"
              className='form-control'
              id="status-code"
              value={code}
              onChange={(e) => setCode(e.currentTarget.value)}
              />
            </label>
          </div>
        </div>
      )
}