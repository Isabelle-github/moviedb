import { Link } from "react-router-dom";
import getString from '../data/strings';

const Nav = (props) => {

    return (
        <div className="nav">
            <Link
                to="/"
                style={
                    props.selectedNav === 0 ? { color: '#21E18C' } : { color: '#FFFFFF' }
                }
            >{getString('popularLinkMovies')}</Link>
            <Link
                to="/series"
                style={
                    props.selectedNav === 1 ? { color: '#21E18C' } : { color: '#FFFFFF' }
                }
            >{getString('popularLinkSeries')}</Link>
        </div>
    );
}

export default Nav;