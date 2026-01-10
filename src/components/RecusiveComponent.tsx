// import { fileTree } from "../data/fileTree";
import type { IFileTree } from "../interfaces";
import { svgStyles } from "../styles";
import FolderComponent from "./FolderComponent";
import File from "./SVG/File";

interface IProps{
fileTree: IFileTree

}




const RecusiveComponent = ({fileTree}: IProps ) => {
    return (
    <div className="px-6 py-1" >
      <div className="flex flex-row mt-2">
       {fileTree.isFolder ?
       <FolderComponent foldername={fileTree.name}/>
       :
       <>
        <svg xmlns="http://www.w3.org/2000/svg" {...svgStyles}><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
        <span className="text-2xl text-white" >
          <File/>
        </span>
        <span>{fileTree.name}</span>
       </>
}   
      </div>
          {/* <FileComponent fileName="Index.tsx"/> */}
      {fileTree.children?.map((item,idx) => (
        <RecusiveComponent key={idx} fileTree={item}/>
      ))}
        {/* <FolderComponent foldername="Components"/> */}
    </div>
    );
}

export default RecusiveComponent;