import { useState } from "react";
import "./App.css";
import CharacterListHP from "n5-remote-hp/CharacterListHP";
import CharacterListRM from "n5-remote-rm/CharacterListRM";
import Header from "n5-remote-commons/Header";

function App() {
  const [selectedMovie, setSelectedMovie] = useState("rm");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <>
      <Header
        onSelect={setSelectedMovie}
        selectedMovie={selectedMovie}
        onSelectLanguage={setSelectedLanguage}
        selectedLanguage={selectedLanguage}
      />{" "}
      <div className="container">
        {selectedMovie === "hp" ? <CharacterListHP /> : <CharacterListRM />}
      </div>
    </>
  );
}

export default App;
