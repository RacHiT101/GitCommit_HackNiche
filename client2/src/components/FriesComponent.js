import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./tinker.css";
const initialCharacters = [
  {
    name: "Richard Hendricks",
    url: "https://th.bing.com/th/id/OIP.cuxTglRpGSTgk91iuEPWhgHaHa?rs=1&pid=ImgDetMain",
  },
  {
    name: "Erlich Bachman",
    url: "https://th.bing.com/th/id/OIP.cuxTglRpGSTgk91iuEPWhgHaHa?rs=1&pid=ImgDetMain",
  },
  {
    name: "Monica Hall",
    url: "https://th.bing.com/th/id/OIP.cuxTglRpGSTgk91iuEPWhgHaHa?rs=1&pid=ImgDetMain",
  },
  {
    name: "Jared Dunn",
    url: "https://th.bing.com/th/id/OIP.cuxTglRpGSTgk91iuEPWhgHaHa?rs=1&pid=ImgDetMain",
  },
  {
    name: "Dinesh Chugtai",
    url: "https://th.bing.com/th/id/OIP.cuxTglRpGSTgk91iuEPWhgHaHa?rs=1&pid=ImgDetMain",
  },
];

function FriesComponent() {
  const [characters, setCharacters] = useState(initialCharacters);
  const [lastDirection, setLastDirection] = useState();

const swiped = (direction, nameToDelete) => {
  console.log("removing: " + nameToDelete);
  setLastDirection(direction);
  const removedCharacter = characters.find(
    (character) => character.name === nameToDelete
  );
  const newCharacters = characters.filter(
    (character) => character.name !== nameToDelete
  );
  setCharacters([...newCharacters, removedCharacter]);
};

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <div>
      <div className="cardContainer">
        {characters.map((character) => (
          <TinderCard
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="card"
            ></div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default FriesComponent;
