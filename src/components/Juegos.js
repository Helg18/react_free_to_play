export default function Juegos(props){
    const {juegos, setJuegos} = props;

    const resetJuegos = () => {
        setJuegos(null);
    }

    return <div className="characters">
        <h1>Juegos</h1>
        <span className="back-home" onClick={resetJuegos}>Volver</span>
        <div className="container-characters">
            {juegos.map((juego, index) => {
                return <div className="character-container" key={index}>
                    <div>
                        <img src={juego.thumbnail} alt={juego.title}/>
                    </div>
                    <div>
                        <h1>{juego.title}</h1>
                        <p className="characte">{juego.short_description}</p>
                        <h6>Ver mas:
                            <a className="text-grey" href={juego.game_url}>{juego.game_url}</a>
                        </h6>
                    </div>
                </div>
            })}
        </div>
        <span className="back-home" onClick={resetJuegos}>Volver</span>
    </div>;
}