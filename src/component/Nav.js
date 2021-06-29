import { Link } from "react-router-dom";
import getString from '../data/strings';

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">{getString('popularLinkMovies')}</Link>
            <Link to="/series">{getString('popularLinkSeries')}</Link>
        </div>
    );
}

export default Nav;