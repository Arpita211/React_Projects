import style from "./TodoApp.module.css";
function TodoApp(){
    return <center className="todo-container">
      <h1  className={style.todoHeading}  style={{fontWeight:"700", fontSize:"50px" }}>TODO App</h1>
      </center>
}
export default TodoApp;