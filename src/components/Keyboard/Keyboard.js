import { firstSoundsGroup } from '../Sounds/Sounds';
import './Keyboard.css';

const Keyboard = () => {
    return firstSoundsGroup.map(sound => {
        return <button className="drum-pad">
            <audio className="clip" id={sound.key} src={sound.url} />
            {sound.key}
            </button>
    })
}

export default Keyboard;