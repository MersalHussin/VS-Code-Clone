import { useDispatch, useSelector } from "react-redux";
import type { IFileTree } from "../interfaces"
import RenderFileIcon from "./RenderFileIcon";
import { setOpendClickedFile, setOpenFiles, setHoveredFileId  } from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";

interface IProps{
file: IFileTree
setShowMenu: (val: boolean) => void
setPostion: (pos: {x: number, y: number}) => void
}



const OpendFileBarTab = ({file, setShowMenu, setPostion}: IProps ) => {
    const dispatch =   useDispatch();
          const {clickedFile:{activeTabId} , openedFiles} = useSelector((state:RootState) => state.fileTree)
        //   Handelrs -- Remove
          const reomveFile = (selectedID: string) => {
              const filterd = openedFiles.filter(file => file.id !==  selectedID)
              dispatch(setOpenFiles(filterd))
              
              if (filterd.length > 0) {
                const lastItem = filterd[filterd.length - 1]
                dispatch(setOpendClickedFile({activeTabId: lastItem.id , fileContent: lastItem.content , filename: lastItem.name}))
              } else {
                dispatch(setOpendClickedFile({activeTabId: null , fileContent: "" , filename: ""}))
              }
          }


          const {content , name , id} = file
        // Handlers --- Onclick 
     const onclick = () => { 
        dispatch((setOpendClickedFile({
            filename: name, 
            fileContent: content,
            activeTabId: id
        })))
    }
    
    const onContextMenu = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(setHoveredFileId(id))
        setPostion({x: e.clientX, y: e.clientY})
        setShowMenu(true)
    }
    
    return (
      <div  className={`flex justify-start items-start border border-gray-100`} >
        <li onClick={onclick} onContextMenu={onContextMenu} style={{borderTop: activeTabId === id ? "3px solid red" : "0 solid transparent" }} className=" flex rounded-sm  py-2 items-center  transition gap-2 cursor-pointer h-fit px-5 hover:bg-[#64646473]" key={file.id}>
                <RenderFileIcon filename={file.name}/>
                 {file.name}
                    <span onClick={(e) =>{
                      e.stopPropagation();
                      reomveFile(file.id)
                    }} className="hover:bg-gray-500 px-2 rounded-lg transition">x</span>
                 </li>
                 
                
        </div>
        
)}

export default OpendFileBarTab; 