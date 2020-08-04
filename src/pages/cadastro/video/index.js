import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useform from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  // const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useform({

    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=lizygC6CwMk',
    categoria: 'Front End',

  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
    setCategorias();
  }, []);


  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // eslint-disable-next-line no-alert
        alert('Video Cadastrado com Sucesso');

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        console.log('l', categoriaEscolhida.id);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,

        })
          .then(() => {
            console.log('cadastrou com sucesso');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={[]}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadasrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
