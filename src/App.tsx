import FileComponent from "./components/FileComponent";
import FolderComponent from "./components/FolderComponent";
// import FolderComponent from "./components/FolderComponent";
import { fileTree } from "./data/fileTree";
import type { IFileTree } from "./interfaces";


interface RecursiveTreeProps{
  item: IFileTree
}

function App() {

  const RecusiveTree = ({item}: RecursiveTreeProps) =>{
    if(!item.isFolder){
      return <FileComponent  fileName={item.name}/>
    }
    return(
      <div>
        <FolderComponent foldername={item.name}/>
        <div className="ml-5 border-l border-gray-300 pl-2">
          {item.children?.map((child,idx) => <RecusiveTree key={idx} item={child}/>)}
        </div>
      </div>
    )
  }

//   function factorial(file:IFileTree){
//   if(file.children?.length == 0) return file
//   return file.children?.map((file) => file.isFolder ? <FolderComponent/> : <FileComponent /> )
// }
  return (
    <>
      {/* <FileComponent fileName="Index.tsx"/> */}
    {fileTree.children?.map((item,idx) => (
      <>
      <RecusiveTree key={idx} item={item}/>
      </>
    ))}
      {/* <FolderComponent foldername="Components"/> */}
    </>
  )
}

export default App;

// {
//   filename: "VS Code Clone"
//   children:[
//     {
//       filenam: "node_modules"
//     }
//     {
//       filenam: "index.html"
//     }
//   ]
// }