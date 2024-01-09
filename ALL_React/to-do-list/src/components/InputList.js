import React from 'react';
import '../App.css';

function InputList(props) {
    const handleEditClick = () => {
        props.updatelist(props.index, props.item);
    };

    return (
        <div>
            <li className='list'>
                {props.item}
                <span className='icons'>
                    <i
                        className="fa-solid fa-trash-can icon-delete"
                        onClick={() => {
                            props.deletelist(props.index);
                        }}
                    ></i>
                    <i
                        className="fa-solid fa-pen icon-update"
                        onClick={handleEditClick}
                    ></i>
                </span>
            </li>
        </div>
    );
}

export default InputList;




