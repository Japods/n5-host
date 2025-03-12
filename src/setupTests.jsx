import "@testing-library/jest-dom";

import { vi } from "vitest";

vi.mock("n5-remote-hp/CharacterListHP", () => () => <div>Mocked HP List</div>);
vi.mock("n5-remote-rm/CharacterListRM", () => () => <div>Mocked RM List</div>);
vi.mock("n5-remote-commons/Header", () => (props) => (
    <div>
        <h1>N5 Test Frontend / Jose Daniel Vivas Rosales</h1>
        <button onClick={() => props.onSelect("hp")}>Harry Potter</button>
        <button onClick={() => props.onSelect("rm")}>Rick y Morty</button>
        <button onClick={() => props.onSelectLanguage("es")}>Español</button>
        <button onClick={() => props.onSelectLanguage("en")}>Inglés</button>
    </div>
));