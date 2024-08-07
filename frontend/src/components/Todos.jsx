// import {todo} from "../../../backend
// export function Todos({todos}){
//     return <div>
//         <div>

//         </div>
//         {todos.map(function(todo){
//             return <div>
//                 <h1>{todo.title}</h1>
//                 <h2>{todo.description}</h2>
//                 <button>{todo.completed ==true?"Completed":"Mark as Completed"}</button>
//             </div>
//         })}
//     </div>
// }
export function Todos({todos}) {
    return (
        <div>
            {console.log(todos)}
            {todos.map((todo) => (
                <div key={todo._id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed ? "Completed" : "Mark as Completed"}</button>
                </div>
            ))}
        </div>
    );
}
