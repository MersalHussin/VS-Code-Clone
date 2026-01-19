import type { IFileTree } from "../interfaces"
import RenderFileIcon from "./RenderFileIcon";

interface IProps{
file: IFileTree
}


const OpendFileBarTab = ({file}: IProps ) => {
    return (
        <div className="flex">
    

        <li style={{border:"2px solid white"}} className=" flex rounded-sm  py-2 items-center  transition gap-2 cursor-pointer h-fit px-5 hover:bg-[#64646473]" key={file.id}>
                <RenderFileIcon filename={file.name}/>
                 {file.name}
                    <span className="hover:bg-gray-500 px-2 rounded-lg transition">x</span>
                 </li>
        </div>
)}

export default OpendFileBarTab; 