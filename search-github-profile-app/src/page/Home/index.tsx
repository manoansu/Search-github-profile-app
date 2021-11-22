import { Link } from 'react-router-dom';
import './styles.css';

const Home = () =>{

    return(
        <div className="home-container">
            <Link to="/github">
                <h2>Desafio Github API</h2>
                <p>Bootcamp Spring React - DevSuperior</p>
                <button className="btn btn-primary btn-lg start-button">Start</button>
            </Link>
        </div>
    );
};

export default Home;