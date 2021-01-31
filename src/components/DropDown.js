import { Dropdown } from 'react-bootstrap';

const DropDown = ({setDifficulty}) => {
    return (
        <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Select Difficulty
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/easy" onSelect={() => setDifficulty("Easy")}>Easy</Dropdown.Item>
            <Dropdown.Item href="#/medium" onSelect={() => setDifficulty("Medium")}>Medium</Dropdown.Item>
            <Dropdown.Item href="#/hard" onSelect={() => setDifficulty("Hard")}>Hard</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    )
};

export default DropDown;
