import { Link } from "react-router-dom";
import { format} from 'date-fns';



export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                        {character.name} 
                    </Link>
                    <br></br>{format(new Date(character.modified), 'MM/dd/yyyy')}
                </li>
            ))}
        </ul>
    );
}
