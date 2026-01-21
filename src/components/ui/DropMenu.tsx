interface IProps{
postion: {x:number, y:number}

}


const DropMenu = ({postion}: IProps ) => {
    return (
        <ul className="bg-white text-black" style={{position:"absolute",left:postion.x,top:postion.y }}>
            <li className="bg-white">close</li>
            <li className="bg-white">CloseAll</li>
        </ul>
    );
}

export default DropMenu;