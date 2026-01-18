import type { RootState } from "./app/store";
import RecusiveComponent from "./components/RecusiveComponent";
import { fileTree } from "./data/fileTree";
import { useSelector } from "react-redux";


function App() {
  const {openedFiles} = useSelector((state:RootState)=> state.fileTree)

  return (
    <>
    <div>
      <RecusiveComponent fileTree={fileTree} />
      <ul>
        {openedFiles.map((file , idx)=> <div key={idx}>{file.name}</div>)}
      </ul>
    </div>
    </>
  )
}

export default App;
