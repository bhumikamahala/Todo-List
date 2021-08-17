const form = document.getElementById("form");
const input = document.getElementById("input");
const todo = document.getElementById("todo");

let todoList=[];

form.addEventListener("submit",function(e){
    e.preventDefault();
    addTodoList();
})

function addTodoList(){
    const newTodo = input.value;

    if(!newTodo) return ;

    todoList.push({
        text: newTodo,
        completed:false
    })

    console.log(todoList);
   // input.value=null;

    localStorage.setItem("todos" ,JSON.stringify(todoList));
     
     listRender();

}

 function listRender(){
    todo.innerHTML = null;

    const todos = localStorage.getItem("todos");
    todoList = JSON.parse(todos);

    for(let i=0; i<todoList.length ;i++){
        const item = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
       
        
        checkbox.addEventListener("click", function(e){
        todoList[i].completed = e.target.checked;
        localStorage.setItem("todos",JSON.stringify(todoList));
       

        if(todoList[i].completed){
         item.classList.add("completed");
         item.classList.remove("uncompleted");
         checkbox.checked = todoList[i].completed; 
        }
        else{
         item.classList.add("uncompleted");
         item.classList.remove("completed");
         checkbox.checked = todoList[i].completed;
        }
    })
        const text = document.createElement("p");
        text.innerText = todoList[i].text;
        text.style.color="blue";
        text.style.alignContent ="centre";
        text.style.fontWeight ="bold";

        const button = document.createElement("button");
        button.innerText ="X";
        button.style.backgroundColor ="red";
        button.style.padding= "4px";

        button.addEventListener("click",function(e){
        todoList.splice(i,1);  // on Given index delete on node
        localStorage.setItem("todos", JSON.stringify(todoList));
        listRender();
        });

        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(button);
        todo.appendChild(item);
        input.value=null;
       }

      }

