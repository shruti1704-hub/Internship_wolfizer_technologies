import './App.css';
import { useState } from "react";
import AnimalShow from "./animalshow";

function getRandomAnimal() {
    const animal = ['bird', 'cat', 'cow', 'horse','dog','gator'];
    return animal[Math.floor(Math.random() * animal.length)]
}

function App() {
    // const [count, setCount] = useState(0);
    const [animal, setanimal] = useState([]);
    const handleClick = () => {
        // console.log("button is clicked")
        // setCount(count + 1);
        setanimal([...animal, getRandomAnimal()]);
    };

    const renderAnimals = animal.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return (
        <div className='app'>
            <button onClick={handleClick}>Click me</button>
            <div className='animal-list'>
                {renderAnimals}
            </div>
        </div>
    );
}

export default App;