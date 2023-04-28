import { Link } from "react-router-dom";

export default function Card({ name, gender, species, onClose, image }) {
  // aca sabemos que props, es un objeto --> {name:'', species: '', gender:'', onClose: fn} // tengo un objeto de propiedades, no un objeto de objetos. diferencia
  return (
    <div>
      <button onClick={onClose}>X</button>
      <Link to={`/detail/${id}`}></Link>
      <h2>{name}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt={name} />
    </div>
  );
}

//lo unico que hace el componente Card, solamente va a mostrar la informacion que yo le mande por parametro, lo va a estar imprimiendo.

// este componente lo voy a estar reutilizando, por eso se usa pasar por parametro asi lo podemos reutilizar

// atento con onClose no lo tenemos que ejecutar (poniendo onClose() ), sino que tenemos que decirle que quiero solamente que se ejecute cuando se haga click.

// el archivo card va a recibir nombre,especie,genero,imange, onClose

// en props se que es un objeto, asi que puedo realizar destructuring

//onClick es un evento, por eso cuando se haga, queremos que haga algo, una funcion, la funcion onClose
