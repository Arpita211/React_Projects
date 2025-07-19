function AddTodo(){
    return(
    <div class="container text-center">
        <div class="row AS-row">
           <div class="col-6"><input type="text" placeholder="Enter your text" /></div>
          <div class="col-4"><input type="date" placeholder="DD-MM-YY"/></div>
          <div class="col-2"><button type="button" class="btn btn-success btns">ADD</button></div>
        </div>
      </div>
    )
}
export default AddTodo;