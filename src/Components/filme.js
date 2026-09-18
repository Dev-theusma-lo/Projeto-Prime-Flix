import { useNavigate } from "react-router-dom";


function FilmeComponente(props) {
    
    const navigate = useNavigate();
        
    
    return(
        <ul key={props.id} className="FilmeComponent">
            <img key={props.poster} alt={props.detalhes} src={`https://www.themoviedb.org/t/p/w600_and_h900_face/${props.poster}`} onClick={() =>{navigate(`/filme/${props.id}`)}}></img>
            <li key={props.titulo}> {props.titulo}</li>
        </ul>
    )
}
export default FilmeComponente;