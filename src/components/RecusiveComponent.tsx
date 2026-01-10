// import { fileTree } from "../data/fileTree";
import { useState } from "react";
import type { IFileTree } from "../interfaces";
// import { svgStyles } from "../styles";
import FolderComponent from "./FolderComponent";
import File from "./SVG/File";
import RightIcon from "./SVG/RightIcon";
import BottomIcon from "./SVG/BottomIcon";

interface IProps{
fileTree: IFileTree

}


const RecusiveComponent = ({fileTree}: IProps ) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const onOpenFolder= () => {
    setIsOpen(prev => !prev)
    console.log(`${fileTree.name} is Open ${isOpen}`)
  }
  
  return (
    <div className="px-6 py-1" >
      <div className="flex flex-row mt-2 cursor-pointer" onClick={()=> onOpenFolder()} >
       {fileTree.isFolder ?
       <div className="flex justify-center items-center">
        {isOpen ? <BottomIcon/> :<RightIcon />} 
       <FolderComponent foldername={fileTree.name}/>
       </div>
       :
       <>
        <span className="text-2xl text-white" >
          <File/>
        </span>
        <span>{fileTree.name}</span>
       </>
}   
      </div>
          {/* <FileComponent fileName="Index.tsx"/> */}
      {isOpen &&
      fileTree.children?.map((item,idx) => (
        <RecusiveComponent key={idx} fileTree={item}/>
      ))
    }
        {/* <FolderComponent foldername="Components"/> */}
    </div>
    );
}

export default RecusiveComponent;