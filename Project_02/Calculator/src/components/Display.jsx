import style from './Display.module.css'
function Display(){
    return(
        <div className={style.Display}>
            <input className={style.input} type="password"/>
        </div>
    )
}
export default Display;