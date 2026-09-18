import { useEffect, useState } from "react";
import api from "../../Services/api";
import FilmeComponente from "../../Components/filme";
import "./home.css";
import Loading from "../../Components/loading";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    async function LoadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "0e5311233910b55719854efa0d37dd44",
          language: "pt-BR",
        },
      });

      console.log(response.data.results);
      setFilmes(response.data.results);
      setStatus(false);
    }

    LoadFilmes();
  }, [status]);
  if (status === false) {
    return (
      <div className="Home">
        <div className="banner-filme">
          <h1>Homem Aranha: Um Novo Dia</h1>
          <button>Ver detalhes</button>
        </div>
        <h2 id="em-cartaz">Em Cartaz</h2>
        <div className="Scrollbar-filmes">
          {filmes.map((filme) => {
            return (
              <FilmeComponente
                id={filme.id}
                titulo={filme.title}
                poster={filme.poster_path}
                detalhes={filme.overview}
              />
            );
          })}
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default Home;
