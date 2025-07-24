import TodoApp from "./components/TodoApp";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";



import "./App.css"


function App() {
  let todoItems = [{
    Name : "Buy Milk",
    DueDate : "7/19/2025"

  },
  {
     Name : "Go for Walk",
    DueDate : "7/19/2025"
  }
] 
  return (
    <center className="todo-container">
     <TodoApp></TodoApp>
     <AddTodo></AddTodo>
     <TodoItems todoItems={todoItems}></TodoItems>
     
     
    
     
    </center>
  );
}

export default App;
