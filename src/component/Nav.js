import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">Popular movies</Link>
            <Link to="/series">Popular series</Link>
        </div>
    );
}

export default Nav;