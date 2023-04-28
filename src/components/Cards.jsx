import Card from "./Card";

/*export default function Cards(props) {
   const { characters } = props;
   return <div></div>;
} */

function Cards({ characters, onClose }) {
  // characters es un array de objetos
  return (
    <div>
      {characters.map(({ id, name, species, gender, image }) => {
        // el map es un metodo que retorna un nuevo array, por eso utilizamos un metodo que retorne
        return (
          <Card // esta Card se utiliza como plantilla
            key={id} // esto lo hacemos para que react no llore en consola. ya que se repite las cards. se podia utilizar index, pero como tenemos el id lo usamos.
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => window.alert("Emulamos que se cierra la card")} //reutilizamos el onClose
          />
        );
      })}
    </div>
  );
}

// llamamos al componente porque ya lo teniamos importado. voy a retornar una Card por cada uno de los elementos

export default Cards;
