import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import './Todo.css'
import DesConnect from './DesConnect';

const Todo = () => {
    const [item, setItem] = useState('');
    const  [newItem, setNewItem] = useState([]);

    const itemEvent = (e) => {
        setItem(e.target.value)
    }

    const addItemList = () => {
        setNewItem((prevValue) => {
            return [...prevValue, item]
        });
        setItem(' ')
    }

    return (
        <div className='main_div'>
            <div className='center_div'>
                <br />
                <h1> ToDo List </h1>
                <br />
                <input value={item} type='text' placeholder='add an item'  onChange={itemEvent}/>
                <Button onClick={addItemList} className='addBtn' variant="contained" color="primary"> 
                        <AddIcon />
                </Button>

                <br />
                <ol>
                    
                    {
                       newItem.map((val, index) => {
                         return <DesConnect text={val} key={index}></DesConnect>
                       })
                    }
                </ol>
            </div>
        </div>
    );
};

export default Todo;