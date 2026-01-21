import OpendFileBar from "./components/OpendFileBar";
import RecusiveComponent from "./components/RecusiveComponent";
import ResizeablePanel from "./components/ResizeablePanel";
import { fileTree } from "./data/fileTree";

function App() {

return (
    <>
    <div className="flex h-screen">
    <ResizeablePanel leftPanel = {

      <div className="h-screen" style={{border:"3px solid white"}} >
        <RecusiveComponent fileTree={fileTree} />
      </div>
      } RightPanel = {

        <div className=" flex  flex-1 p-2">
        <OpendFileBar />
      </div>
      }/>
    </div>
    </>
  )
}

export default App;
