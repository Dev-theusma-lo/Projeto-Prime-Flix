import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="Header">
            <h1>PrimeFlix</h1>
            <div>
                <Link to="/" >Home</Link>
                <Link to="/">Minha Lista</Link>
            </div>
        </div>
    )
}

export default Header;