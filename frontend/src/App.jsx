// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
//'
import { useEffect } from 'react'
function App() {
  const[todos,setTodos]= useState([]);
  

  // fetch("https://localhost/3000/todos")
  //   .then(async function(res){
  //     const json =await res.json();
  //     setTodos(json.todos);
  // })
  // fetch("http://localhost:3000/todos")
  //     .then(async function(res) {
  //       if (!res.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const json = await res.json();
  //       setTodos(json.todos);
  //     })
  //     .catch(error => {
  //       console.error("Failed to fetch todos:", error);
      // });
  

      useEffect(() => {
        fetch("http://localhost:3000/todos")
          .then(async function(res) {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            const json = await res.json();
            setTodos(Array.isArray(json.todos) ? json.todos : []);
          })
          .catch(error => {
            console.error("Failed to fetch todos:", error);
          });
      }, []); 

      const addTodo = (newTodo) => {
        setTodos(prevTodos => [...prevTodos, newTodo]);
      };
    // console.log({todos})
  return (
    <>
    <CreateTodo addTodo={addTodo}></CreateTodo>
    <Todos todos={todos}></Todos>
    </>
  )
}

export default App  
