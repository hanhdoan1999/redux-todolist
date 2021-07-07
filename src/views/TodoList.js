import React from 'react';
// import Todo from './Todo';
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../redux/actions/index';
import Todo from './Todo'

function TodoList({TodoList,handleToggle,handleDelete,handelEdit}) {
    const data = useSelector(state => state.taskReducer.data);
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchData()), []);
    // console.log(data);
    return (
        <>
        {data.map((task,index) => <Todo key={index} todo={task}>{task.task}</Todo>)}
      </>
    )
}



export default TodoList