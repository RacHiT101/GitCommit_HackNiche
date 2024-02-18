import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./tinker.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";




function FriesComponent() {
   const navigate = useNavigate();
     const [filter, setfilter] = useState("");
     const [ParentCategory, setParentCategory] = useState([]);
     const [products, setProducts] = useState([]);
     const handleClick = (food) => {
       setfilter(food);
     };

     const getProduct = async () => {
       try {
         const res = await axios.get(
           "https://backend-truck.onrender.com/products/"
         );
         const modifiedProducts = res.data.map((product) => ({
           ...product,
           ParentCategory: product.categories[1], // Add the second category as a new field
         }));

         const uniqueSecondCategories = [
           ...new Set(
             modifiedProducts.map((product) => product.ParentCategory)
           ),
         ];
         setParentCategory(uniqueSecondCategories);

         console.log(modifiedProducts);
         setProducts(modifiedProducts);
       } catch (err) {
         console.log(err);
       }
     };

     console.log(products.ParentCategory);

     useEffect(() => {
       getProduct();
       // console.log(count)
     }, []);
     const initialCharacters = [
       {
         name: "priyanka",
         url: "https://th.bing.com/th/id/OIP.Kgseih1p9wqkEw2doQ_ZrQHaHa?w=199&h=199&c=7&r=0&o=5&dpr=2&pid=1.7",

       },

       {
         name: "Erlich Bachman",
         url: "https://static.vecteezy.com/system/resources/previews/002/871/103/large_2x/top-view-of-paghetti-carbonara-dish-sticker-on-white-background-free-vector.jpg",
       },
       {
         name: "Monica Hall",
         url: "https://th.bing.com/th/id/OIP.GwHRIJBuTQr4FtXWdpM50wHaHa?w=193&h=193&c=7&r=0&o=5&dpr=2&pid=1.7",
       },
       {
         name: "Richard Hendricks",
         url: "https://thumbs.dreamstime.com/b/tasty-pizza-margherita-tomato-cheese-basil-top-view-isolated-white-background-flat-traditional-italian-fast-food-icon-172075092.jpg",
       },
     ];
    //  console.log(products);
  const [characters, setCharacters] = useState(initialCharacters);
  const [lastDirection, setLastDirection] = useState();

const swiped = (direction, nameToDelete) => {
  console.log("removing: " + nameToDelete);
  setLastDirection(direction);
  const removedCharacter = products.find(
    (character) => character.title === nameToDelete
  );
  const newCharacters = products.filter(
    (character) => character.title !== nameToDelete
  );
  setCharacters([...newCharacters, removedCharacter]);
};

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

 
  return (
    <div className="cardContainer">
      {products.map((character) => (
        <TinderCard
          className="swipe"
          key={character._id}
          onSwipe={(dir) => {
            if (dir === "right") {
              navigate(`/items/${character.ParentCategory}`);
            }
            swiped(dir, character.title);
          }}
          onCardLeftScreen={() => outOfFrame(character.title)}
        >
          <div
            style={{ backgroundImage: "url(" + character.image + ")" }}
            className="card"
          ></div>
        </TinderCard>
      ))}
    </div>
  );
}

export default FriesComponent;



