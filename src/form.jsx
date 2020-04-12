    import React from "react";
    import { useState } from "react";

    const Form = () =>{
    const[value,setValue] = useState("");
    const[todos, setTodos] = useState([
        {id:1, todotext: "Get Groceries"},
        {id:2, todotext: "Get Fuel"},
        {id:3, todotext: "Clean Kitchen"}

        
    ])
  
    
    function handleChange(e){
    e.preventDefault();
    console.log("Change");
    setValue(e.target.value);

    }
    function handleNew(e){
    e.preventDefault();
    console.log(value);
    if(value === "") return
    else

    setTodos([...todos, {id: Date.now(), todotext:value}])
    
    setValue("")

    }
    function remove(id){
    setTodos(todos.filter((todo) => todo.id !== id))
    } 
    return(
    <div> 
    <form onSubmit = {handleNew}>
        
    <input value ={value}  onChange = {handleChange} />
      

    <ul>
        
    {todos.map((todo) => (
    <ul key = {todos.id}>

    <a href = "#" onClick = {() => remove(todo.id)}>
    X
    </a>

    <p className = ''> {todo.todotext} </p>


    </ul>

    ))}

    </ul>

    </form>

    </div>
    )

    }
    export default Form