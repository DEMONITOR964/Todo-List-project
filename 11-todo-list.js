const todoList=[{name:`make dinner`,
  dueDate:`2025-5-30`},
{name:'wash dishes',
dueDate:'2025-5-30'}];


renderTodoList();

function renderTodoList(){


let todoListHTML='';

for(let i=0;i<todoList.length;i++){
  const todoNameObject=todoList[i];
  //const name=todoNameObject.name;
 // const dueDate=todoNameObject.dueDate;
  const {name,dueDate}=todoNameObject
    const html=`
  <div>${name}</div>
      <div>${dueDate}</div>

     <button class="js-delete-button" onclick="
     todoList.splice(${i},1);
     renderTodoList();
     ">Delete</button>
     `;
    todoListHTML=todoListHTML+html;
}
   // console.log(todoListHTML)

    document.querySelector('.js-div-todo-list').innerHTML=todoListHTML
}
function addTodo(){
 const inputElement=document.querySelector('.js-Todo1-input')
 const dateInputElement=document.querySelector('.js-due-date-input');
 const dueDate=dateInputElement.value 
const name=inputElement.value;
//console.log(name)
todoList.push({name,dueDate})
//console.log(todoList)
inputElement.value=''
renderTodoList();
}