// App.js
import React, { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import InputList from './components/InputList';

function App() {
    const [listToDo, setlistToDo] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const addlist = (InputText) => {
        if (editIndex !== null) {
            // Editing an existing item
            let newlistToDo = [...listToDo];
            newlistToDo[editIndex] = InputText;
            setlistToDo(newlistToDo);
            setEditIndex(null);
        } else {
            // Adding a new item
            if (InputText !== '') {
                setlistToDo([...listToDo, InputText]);
            }
        }
    }

    const deletelist = (key) => {
        let newlistToDo = [...listToDo];
        newlistToDo.splice(key, 1);
        setlistToDo(newlistToDo);
        setEditIndex(null); // Clear the editIndex when deleting an item
    }

    const updatelist = (key) => {
        // Set the editIndex to the clicked item's index
        setEditIndex(key);
    }

    return (
        <>
            <div>
                <InputBox addlist={addlist} editIndex={editIndex} setEditIndex={setEditIndex} listToDo={listToDo} />
                {listToDo.map((listItem, i) => {
                    return (
                        <InputList
                            key={i}
                            index={i}
                            item={listItem}
                            deletelist={deletelist}
                            updatelist={updatelist}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default App;
