cons apiurl = "http://localhost:8080/todos";
async function fetchTodos() {
const response = await fetch(apiur1);
 const todos = await response.json();
 const todosDiv = document.getElementById("todos");
 todosDiv.innerHTML = "";  
 todos.forEach(todo => {
 cons todoDiv = document createElement("div");
 todoDiv.className ="list_goup-item list-group_item-action todo";
 todoDiv.innerHTML = `
 <div class="d_flex w_100 justify-content_between">
<h5 class="mb_1">${todo.title}</h5>
<small>
<input type="checkbox" ${todo.completed ? "checked" : ""} data_id="${todo.id}"
>
</small>
</div>
<p class="mb_1">${todo.description}</p>
<button class="btn btn_danger btn_sm" data_id="${todo.id}">Delete</button>
~;
todosDiv.appendChild(todoDiv);
 });
}
async function addTodo() {
    const tittle = document.getElementById("description").value;
    const description = document.getElementById("description").value;
    const response = await fetch(apiurl, {
        method: "POST",
        headers: {"content_Type": "application/json" },
        body:JSON.stringify({ title,description,completed: false })
    });
    if (response.status ===201) {
        fetchTodos();
    }
 }
 async function deleteTodo(id) {
    const response = await fetch(`${apiurl}/${id}`, {
        method:"DELETE"
    });
    if (response.status === 204) {
        fetchTodos();
    }
 }
 document.getElementById("todo_form").addEventListener("submit", async (event) => {
    event.preventDefault();
    await addTodo();
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
 } );
 document.getElementById("todos").addEventListener('click', async (event) => {
    if (event.target.tagName === "BUTTON") {
        await deleteTodo(event.target.getAttribute("data_id"));
}else if (event.target.tagName === "INPUT") {
    const id =event.target.getAtatribute("data_id");
    const completed = event.target.checked;
    await fetch(`${apiurl}/${id}`, {
      method: "PUT",
      headers: { "content_Type": "application/json" },
      body: JSON.stringify({ completed })  
    });
    fetchTodos();
    }
    });
fetchTodo();



    





































]












}
})