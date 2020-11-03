import React, { Fragment, useState, useEffect} from 'react';



  const  ToDoList=()=> {
    const [toDo, setToDo] = useState('');
    const [toDoList, setToDoList] = useState(['leaning','drinking'])
 

    const handleSubmit=e=>{
      e.preventDefault();
      console.log("e",e);
      console.log("toDoList ",toDoList)
      toDoList.push(toDo)
      return toDoList;
    }

    useEffect(()=>{
    }, [toDoList])



    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              input:
              <input type="text" value={toDo} onChange={e=>setToDo(e.target.value)}  />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <div>{}</div>
          <div>{toDo}</div>
          <ul>
            {
              toDoList.map((item, index)=>{
                return    <li index={index}>{item}</li>
              })
             
            }
          </ul>
 </div>
  )
}

export default ToDoList;