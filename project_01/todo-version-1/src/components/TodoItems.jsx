import AddItems from './AddItems';


const TodoItems = ({todoItems})=>{
    return(
        <div>
            {
                todoItems.map((items)=>(
                    <AddItems itemName = {items.Name} itemDate ={items.DueDate}></AddItems>

                ))
            }
      
      
        </div>

    );
}
export default TodoItems;