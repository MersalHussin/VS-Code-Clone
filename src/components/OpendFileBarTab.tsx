import { useDispatch, useSelector } from "react-redux";
import type { IFileTree } from "../interfaces"
import RenderFileIcon from "./RenderFileIcon";
import { setOpendClickedFile , setActiveTabId } from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";

interface IProps{
file: IFileTree
}

const OpendFileBarTab = ({file}: IProps ) => {
    const {activeTabId} = useSelector((state:RootState) => state.fileTree)
    const dispatch =   useDispatch();
    // Handelrs 
    const {content , name , id} = file
     const onclick = () => { 
        dispatch((setOpendClickedFile({
            filename: name, 
            fileContent: content
        })))
        dispatch(setActiveTabId(id))
    }
    return (
        <div className={`flex border border-gray-100`} >
        <li onClick={onclick} style={{borderTop: activeTabId === id ? "3px solid red" : "3px solid transparent" }} className=" flex rounded-sm  py-2 items-center  transition gap-2 cursor-pointer h-fit px-5 hover:bg-[#64646473]" key={file.id}>
                <RenderFileIcon filename={file.name}/>
                 {file.name}
                    <span className="hover:bg-gray-500 px-2 rounded-lg transition">x</span>
                 </li>
        </div>
)}

export default OpendFileBarTab; 