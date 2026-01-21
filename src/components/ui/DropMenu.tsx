import { useRef } from "react";

interface IProps{
postion: {x:number, y:number}

}


const DropMenu = ({postion}: IProps ) => {
    const menuRef = useRef<HTMLDivElement>(null)
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