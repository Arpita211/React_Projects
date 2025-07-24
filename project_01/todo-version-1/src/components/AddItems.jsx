function AddItems({itemName , itemDate}){
    
    return(
         <div className="container items">
        <div className="row AS-row">
           <div className="col-6">{itemName}</div>
          <div className="col-4">{itemDate}</div>
          <div className="col-2" style={{textAlign:"center"}}> <button type="button" class="btn btn-danger btns">DELETE</button></div>
        </div>
      </div>
    )
}
export default AddItems;