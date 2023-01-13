import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { NavigateMenu } from "../../components/NavigateMenu";


export const FirstPage = () => {
  const auth = useContext(AuthContext);
  console.log(auth)
  
  const [posts, setPosts] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState<Number>(1);
  const [postsPerPage] = useState<Number>(10);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("https://randomuser.me/api/?results=100")
      setPosts(res.data.results);
    }

    fetchUsers()
  }, []);

  //* Get current user
  const indexOfLastPost = Number(currentPage) * Number(postsPerPage);
  const indexOfFirstPost = indexOfLastPost - Number(postsPerPage);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // console.log(posts)
  // console.log(currentPosts)

  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(posts.length / Number(postsPerPage)); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: Number) => setCurrentPage(pageNumber)

  const [searchText, setSearchText] = useState<String>('');

  const handleSearch = (value: String) => {
    console.log(value)
    setSearchText(value)
  }

  return (
    <div>

      <NavigateMenu />

      <div>
        Search: <input 
          type="text" 
          placeholder="Search" 
          value={String(searchText)}
          onChange={e => handleSearch(e.target.value)}
        />
      </div>

      <h2>PRIMEIRA PAGINA - https://randomuser.me/</h2>
      <div>
        {currentPosts.map((usuario) => (
          <div key={usuario.dob.date}>
            <img src={usuario.picture.medium} alt="" />
            <p>
              <span>{usuario.name.first}</span> <span>{usuario.name.last}</span>
            </p>
            <p>{usuario.email}</p>
            <p>{usuario.login.username}</p>
            <p>{usuario.dob.age}</p>
          </div>
        ))}
      </div>

      <nav>
        <ul>
          {pageNumbers.map(number => (
            <li key={number}>
              <button onClick={() => paginate(number)}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Olá {auth.user?.name}, bem vindo! */}
    </div>
  );
}