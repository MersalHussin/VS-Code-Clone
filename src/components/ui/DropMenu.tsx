import { useEffect, useRef } from "react";
import { useDispatch} from "react-redux";
// import type { RootState } from "../../app/store";
import { setOpenFiles } from "../../app/features/fileTreeSlice";

interface IProps{
postion: {x:number, y:number}
setShowMenu: (val:boolean) => void;

}




const DropMenu = ({postion , setShowMenu}: IProps ) => {
    const dispatch = useDispatch()
    // const {openedFiles} = useSelector((state:RootState) => state.fileTree)
    
    // Functions: 
    const RemoveAll = () => {
        console.log("Remove All");
        dispatch(setOpenFiles([]))
        
    }
    const menuRef = useRef<HTMLDivElement>(null)
    // event: MouseEvent
useEffect(()=>{
    // if(menuRef.current && !menuRef.current.contains(event.target as Node))
    // console.log(menuRef.current);
    const handleClickOutside = ()=>{
        console.log("outside");
        setShowMenu(false)
    }
    window.addEventListener('click',handleClickOutside)

    return() =>{
        window.addEventListener('click', handleClickOutside)}
},[setShowMenu])

    console.log(menuRef);
    return (
        <div ref= {menuRef}>
        <ul className="bg-white text-black" style={{position:"absolute",left:postion.x,top:postion.y }}>
            <li className="bg-white">close</li>
            <li className="bg-white" onClick={RemoveAll}>CloseAll</li>
        </ul>
        </div>
    );
}

export default DropMenu;

//  ** UseEffect
//  ** Click Event
//  ** Menu Redf => UseRef Done