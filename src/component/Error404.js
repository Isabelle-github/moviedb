import popcorn from '../img/404.svg';
import getString from '../data/strings';

const Error_404 = () => {
    return (
        <div className="err404">
            <h1>404</h1>
            <img src={popcorn} alt="" />
            <p>{getString('Error404Text')}</p>
        </div>
    );
}

export default Error_404;