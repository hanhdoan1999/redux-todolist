import  { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../redux/actions/index';


function Add() {
    const dispatch = useDispatch();
    const [task, setTask] = useState('');
    // const [complete, setComplete] = useState(false);


    const onSubmit = (e) => {
        e.preventDefault();
        if(!task){
            alert('Please add a text')
        }else{
            // onAdd({task ,complete})
            dispatch(addTask(task))
            setTask('')
            // setComplete(false)
        }
    }

    return (
        <div className="addTask">
            <form action="" onSubmit={onSubmit}>
                <input type="text" placeholder="Add task" value={task} onChange={(e) => setTask(e.target.value)}/>
                <input type="submit" value="Add" className="btn"/>
            </form>
        </div>
    )
}

export default Add