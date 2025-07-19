import TodoApp from "./components/TodoApp";
import AddTodo from "./components/AddTodo";
import AddItems from "./components/AddItems";
import "./App.css"


function App() {
  return (
    <center class="todo-container">
     <TodoApp></TodoApp>
     <AddTodo></AddTodo>
      <AddItems></AddItems>
     
    </center>
  );
}

export default App;
