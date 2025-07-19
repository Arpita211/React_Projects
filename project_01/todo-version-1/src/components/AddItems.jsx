function AddItems(){
    let itemName = "Buy Milk"
    let itemDate = "7/19/2025"
    return(
         <div class="container items">
        <div class="row AS-row">
           <div class="col-6">{itemName}</div>
          <div class="col-4">{itemDate}</div>
          <div class="col-2"> <button type="button" class="btn btn-danger btns">DELETE</button></div>
        </div>
      </div>
    )
}
export default AddItems;