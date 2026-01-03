import FileComponent from "./components/FileComponent";
import FolderComponent from "./components/FolderComponent";

function App() {
  return (
    <>
      <FileComponent fileName="Index.tsx"/>
      <FileComponent fileName="File.tsx"/>
      <FolderComponent foldername="Components"/>
    </>
  )
}

export default App;
