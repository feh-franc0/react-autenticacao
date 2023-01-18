// import { useContext } from "react";
// import { AuthContext } from "../../contexts/Auth/AuthContext";
// import { NavigateMenu } from "../../components/NavigateMenu";

// export const ThirdPage = () => {
//   const auth = useContext(AuthContext);

//   return (
//     <div>
//       <NavigateMenu />
//       <h2>TERCEIRA PAGINA - Random Dog </h2>

//       Olá {auth.user?.name}, bem vindo!
//     </div>
//   );
// }







import React, { useEffect, useState } from 'react'
import Styles from './RandomDogImage.module.css'
import { fetchNewImg } from './randomDogImg'
import Loading from './Loading200Px'
// import Refresh from './SvgArrowClockwise'
import ImgNotFound from './not-found.png'
import { NavigateMenu } from '../../components/NavigateMenu'

export const ThirdPage = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const [imgSrc, setImgSrc] = useState<string>()

  // fetch new img source and stores on State
  async function refreshImg() {

    setLoading(true)

    const res: string = await fetchNewImg()

    setImgSrc(res)

    setLoading(false)

    return
  }

  useEffect(() => {

    refreshImg()

  }, [])

  return (
    <div className={Styles.container}>
      <NavigateMenu />
      <h2>TERCEIRA PAGINA - Random Dog </h2>
      <h1>Cachorros Aleatórios</h1>

      <p>Veja uma imagem diferente cada vez que clicar no botão Atualizar.</p>

      {/* <p>Em uma terceira página, deve haver um botão de refresh que, ao ser clicado, deve retornar uma imagem aleatória da api Random Dog;*/}

      <div className={Styles.main_content}>


        <div
          className={Styles.img_container}
        >

          {!loading ? (
            <object data={imgSrc}
              width='300px' height='auto'
              aria-label='Foto aleatória de cachorro.'
            >
              <img src={ImgNotFound}
                alt='Imagem Não Disponível.'
                width='300px' height='auto'
              >
              </img>
            </object>
          ) : (
            <Loading />
          )}

        </div>


        <button
          id={Styles.refresh_btn}
          title='Mostrar Outra imagem de cachorro.'
          onClick={() => refreshImg()}
        >
          {/* <Refresh /> */}
          Atualizar Imagem
        </button>

      </div>
    </div>
  )
}