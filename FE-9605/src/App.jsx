import { Fragment, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './App.css'
import styled from 'styled-components';


const ListItem=styled.li`
cursor: pointer;
`;

function App() {
  const [todoInput, setTodoInput]=useState("");

  const[todos, setTodos]=useState([]);

  const addTodo=()=>{
    setTodos([...todos,todoInput]);
    setTodoInput("");
  };
  return (
   <Fragment>
    
     <Form>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>Hedef</Form.Label>
        <Form.Control value={todoInput} onChange={(e)=>{
          setTodoInput(e.target.value);
        }} type='text'/>
      </Form.Group>
      <Button onClick={addTodo} variant='success'>Ekle</Button>
     </Form>
     
     <ul>{todos.map(todo=><ListItem onClick={()=>{
      setTodos(todos.filter(filterTodo => filterTodo !== todo))
     }} key={todo}>{todo}</ListItem>)}
     </ul>
     </Fragment>
  )
}

export default App
