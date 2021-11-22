import './styles.css';

type Props ={
    perfil: string;
    seguidores: string;
    descriptions: string;
    name: string;
}
const ResultCard = ( { perfil, descriptions ,seguidores, name }: Props) => {

    return(
        <div className="result-container">
            <h3 className="result-perfil">{perfil}</h3>
            <h3 className="result-seguidores">{seguidores}</h3>
            <h3 className="result-descriptions">{descriptions}</h3>
            <h3 className="result-name">{name}</h3>
        </div>
    );
};

export default ResultCard;