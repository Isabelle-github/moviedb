import { Link } from "react-router-dom";
import getString from '../data/strings';

const Nav = (props) => {

    const setNav = (nav) => {
        props.setNav(nav)
    }

    return (
        <div className="nav">
            <Link
                to="/"
                onClick={() => setNav(0)}
                style={
                    props.selectedNav === 0 ? { color: '#21E18C' } : { color: '#FFFFFF' }
                }
            >{getString('popularLinkMovies')}</Link>
            <Link
                to="/series"
                onClick={() => setNav(1)}
                style={
                    props.selectedNav === 1 ? { color: '#21E18C' } : { color: '#FFFFFF' }
                }
            >{getString('popularLinkSeries')}</Link>
        </div>
    );
}

export default Nav;