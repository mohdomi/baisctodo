export function Todos({tododetails}){

    function something(todo_id){

        fetch("http://localhost:3000/completed" , {
            method : "PUT" , 
            body : JSON.stringify({
                id : todo_id
            }) , 
            headers : {
                "Content-type" : "application/json"
            }
        })

    }
    
    return(
        <div>
            {
            tododetails.map((todo)=>{
                return(
                    <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button onClick={()=>{something(todo._id)}}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
                    </div>
                )

            })
            }
            
        </div>
    )
}