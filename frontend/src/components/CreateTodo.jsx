import { useState } from "react"

export function CreateTodo(props){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("")
    return <div>
        
        <input type="text" placeholder="title" onChange={function(e){
            const value=e.target.value
            setTitle(value);
            } }/> <br />


        <input type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }} /><br />

            <button
                onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then(async function (res) {
                            const json = await res.json();
                            alert("Todo added");
                            props.addTodo({
                                // id: json.id, // Ensure the ID is set correctly from the response
                                title: title,
                                description: description,
                                completed: false,
                            })

                            
                        })
                        .catch((err) => {
                            console.error(err);
                            
                        });
                }}
            >
                Add a Todo
            </button>
    </div>
}

