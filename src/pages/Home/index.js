import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
// eslint-disable-next-line
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414" }} >
      <Menu/>

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"O que é Front-end? Trabalhona área"}
        />

        <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
        />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
        />


      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
        />

    </div>
  );
}

export default Home;
