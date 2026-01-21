// import { fileTree } from "../data/fileTree";
import { useState } from "react";
import type { IFileTree } from "../interfaces";
// import { svgStyles } from "../styles";
// import FolderComponent from "./FolderComponent";
// import File from "./SVG/File";

import RenderFileIcon from "./RenderFileIcon";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { setOpendClickedFile, setOpenFiles } from "../app/features/fileTreeSlice";

interface IProps{
fileTree: IFileTree

}


const RecusiveComponent = ({fileTree}: IProps ) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  const onOpenFolder= () => {
    setIsOpen(prev => !prev)
    console.log(`${fileTree.name} is Open ${isOpen}`)
  }
  
  const dispatch = useDispatch()
  const {openedFiles} = useSelector((state:RootState)=> state.fileTree)
  return (
    <div className="px-6 py-1" >
      <div className="flex flex-row mt-2 cursor-pointer" onClick={()=> onOpenFolder()} >
       {fileTree.isFolder ?
       <div className="flex justify-center items-center">
        {isOpen ? <ArrowDown/> :<ArrowRight />} 
       {/* <RenderFileIcon filename={fileTree.name}/> */}
       <RenderFileIcon filename={fileTree.name} isOpenFolder={isOpen} isfolder={true}/>
       <span>{fileTree.name}</span>
       {/* <FolderComponent foldername={fileTree.name}/> */}
       </div>
       :
       <>
        <span className="text-2xl text-white" >
          {/* <File/> */}
        <RenderFileIcon filename={fileTree.name}/>
        </span>
        <span>{fileTree.name}</span>
       </>
}   
      </div>
          {/* <FileComponent fileName="Index.tsx"/> */}
      {isOpen &&
      fileTree.children?.map((item,idx) => (
        <div key={idx} onClick={()=> {
          if (!item.isFolder) {
            dispatch(setOpendClickedFile({
                filename: item.name, 
                fileContent: item.content,
                activeTabId: item.id
            }))
            if (!openedFiles.find(file => file.id === item.id)) {
              dispatch(setOpenFiles([...openedFiles, item]))
            }
          }
        }}>
        <RecusiveComponent  fileTree={item} />
        </div>
      ))
    }
        {/* <FolderComponent foldername="Components"/> */}
    </div>
    );
}

export default RecusiveComponent;