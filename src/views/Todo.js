import { useState } from 'react';
import { FaRegTrashAlt,FaRegGrinBeam } from 'react-icons/fa';
import {useDispatch} from 'react-redux';
import {fetchDelete, fetchUpdateStatus,fetchUpdateName} from '../redux/actions/index';

function Todo({todo}) {
  // const data = useSelector(state => state.taskReducer.data);
  const dispatch = useDispatch();

  const [textChange, setTextChange] = useState(todo.task);
  const [editText, setEditText] = useState(true);


  const getTextLine = () => {
    let text = "text truncate";
    text += (todo.complete) ? " strike" : ""
    return text;
  }

  const test = () => {
    setEditText(true);
  }

  return (
    <div className="item">
      <input type="checkbox" name="status" value={todo.complete} onChange={() => { dispatch(fetchUpdateStatus(todo)) }} checked={todo.complete ? "checked" : ""} disabled = {!editText ? "disabled" : ""}/>
        {editText 
        ? 
        (<p onDoubleClick={() => { setEditText(false); }} className={getTextLine()} >{todo.task}</p>)
        :
        (
        <input maxLength='100' onBlur={()=>{test()}} autoFocus type="text" value={textChange} onChange={(e) => { setTextChange(e.target.value) }} 
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === 'Escape') {
                if(textChange === ""){
                  alert("Please enter name ! ")
                }else {
                  // onEdit(todo, textChange);
                  dispatch(fetchUpdateName(todo, textChange))
                  event.preventDefault()
                  event.stopPropagation()
                  setEditText(true);
                }
              }
            }}
        />)
        }

      <div className="icon">
        {!editText 
        ? 
        (<div onClick={() => { dispatch(fetchUpdateName(todo, textChange)); setEditText(true) }}><FaRegGrinBeam /></div>) 
        : 
        (<div onClick={() => { dispatch(fetchDelete(todo))}}><FaRegTrashAlt /></div>)
        }
        
      </div>
    </div>

  )
}

export default Todo