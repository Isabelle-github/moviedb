import popcorn from '../img/404.svg'

const Error_404 = () => {
    return (
        <div className="err404">
            <h1>404</h1>
            <img src={popcorn} alt="" />
            <p>Did you get lost on your way to get some snacks?</p>
        </div>
    );
}

export default Error_404;