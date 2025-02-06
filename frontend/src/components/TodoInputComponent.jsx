export function TodoInput(){

    return(
        <div>
            <input style={{
                padding : 10 , 
                margin : 10
            }} type="text" placeholder="title" id="title"/> <br />
            <input style={{
                padding : 10 , 
                margin : 10
            }} type="text" placeholder="description" id="desc"/> <br />
            <button style={{
                padding : 10 , 
                margin : 10
            }} onClick={()=>{

                fetch("http://localhost:3000/todo" , {
                    method : "POST" , 
                    body : JSON.stringify({
                        title : document.getElementById("title").value,
                        description : document.getElementById("desc").value,
                        completed : false
                    }) , 
                    headers : {
                        "Content-type" : "application/json"
                    }
                })

            }}>Add Todo</button>            
        </div>
    )

}