import FileComponent from "./components/FileComponent";
import FolderComponent from "./components/FolderComponent";
// import FolderComponent from "./components/FolderComponent";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <>
      {/* <FileComponent fileName="Index.tsx"/> */}
    {fileTree.children?.map((item,idx) => (
      <>
        {item.isFolder ? 
        <>
        <FolderComponent key={idx} foldername={item.name}/>
        <h1 className="ml-5">{item.children?.map((item,idx) => <FileComponent key={idx} fileName={item.name} />)}</h1>
        </>
        :
        <FileComponent key={idx} fileName={item.name}/>
        }
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