function AddTodo(){
    return(
    <div className="container text-center">
        <div className="row AS-row">
           <div className="col-6"><input type="text" placeholder="Enter your text" /></div>
          <div className="col-4"><input type="date" placeholder="DD-MM-YY"/></div>
          <div className="col-2"><button type="button" class="btn btn-success btns">ADD</button></div>
        </div>
      </div>
    )
}
export default AddTodo;