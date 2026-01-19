import OpendFileBar from "./components/OpendFileBar";
import RecusiveComponent from "./components/RecusiveComponent";
import { fileTree } from "./data/fileTree";

function App() {

return (
    <>
    <div className="flex h-screen">

      <div style={{border:"3px solid white"}} className="w-60 p-2">
        <RecusiveComponent fileTree={fileTree} />
      </div>
      <div className=" flex  flex-1 p-2">
        <OpendFileBar />
      </div>
    </div>
    </>
  )
}

export default App;
