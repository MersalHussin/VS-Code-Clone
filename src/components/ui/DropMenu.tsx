import { useEffect, useRef } from "react";

interface IProps{
postion: {x:number, y:number}
setShowMenu: (val:boolean) => void;

}


const DropMenu = ({postion , setShowMenu}: IProps ) => {
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
            <li className="bg-white">CloseAll</li>
        </ul>
        </div>
    );
}

export default DropMenu;

//  ** UseEffect
//  ** Click Event
//  ** Menu Redf => UseRef Done