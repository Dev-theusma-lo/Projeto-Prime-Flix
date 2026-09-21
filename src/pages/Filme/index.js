import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/loading";
import api from "../../Services/api";
import "./filme.css";

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState();
  const [status, setStatus] = useState(true);

  useEffect(() => {
    async function ChamarFilme() {
      const response = await api.get(`movie/${id}`, {
        params: {
          api_key: "0e5311233910b55719854efa0d37dd44",
          language: "pt-BR",
        },
      });

      //   console.log(response.data);
      setFilme(response.data);
      console.log(response.data);
      setStatus(false);
    }

    ChamarFilme();
  }, [status, id]);

  if (status === false) {
    return (
      <div>
        <h1 id="titulo-pagina">Detalhes do Filme</h1>
        <div className="detalhe-filme">
          <img
            id="imagem-fundo"
            alt={filme.title}
            src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
          />

          <div className="content-wrapper">
            <img
              id="poster"
              alt={filme.title}
              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
            />
            <div className="detalhes">
              <h1>{filme.title}</h1>
              <p>{filme.overview}</p>
              <div className="botoes-filme">
                <a  target="blank" href={`https://www.youtube.com/results?search_query=trailer ${filme.title}`}><button id="trailer-filme">Ver Trailer</button></a>
                <button id="adcionar-lista">Adicionar a Minha Lista</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default Filme;
