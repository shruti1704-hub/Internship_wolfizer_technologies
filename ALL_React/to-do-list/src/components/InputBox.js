import React, { useState, useEffect } from 'react';
import '../App.css';

function InputBox(props) {
    const [InputText, setInputText] = useState('');

    useEffect(() => {
        // Update the input value when editIndex changes
        if (props.editIndex !== null) {
            setInputText(props.listToDo[props.editIndex]);
        }
    }, [props.editIndex, props.listToDo]);

    return (
        <>
            <div className='body'>
                <input
                    type="text"
                    placeholder='Enter an Item'
                    className='input'
                    onChange={(e) => setInputText(e.target.value)}
                    value={InputText}
                />
                <button
                    className='btn'
                    onClick={() => {
                        props.addlist(InputText);
                        setInputText('');
                    }}
                >
                    {props.editIndex !== null ? 'Update Item' : 'Add an item'}
                </button>
            </div>
        </>
    );
}

export default InputBox;
