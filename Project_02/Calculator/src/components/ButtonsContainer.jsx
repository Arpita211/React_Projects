import style from './Buttons.module.css'
function ButtonsContainer(){
    const buttonsName = ['c','1','2','3','4','5','6','7','8','9']
    return(
        <div className={style.container}>  {
            buttonsName.map((buttons) =><buttons className={style.Buttons}>{buttons}</buttons>)

        }
</div>
       
    )
}
export default ButtonsContainer;