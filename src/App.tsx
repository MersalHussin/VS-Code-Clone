import RecusiveComponent from "./components/RecusiveComponent";
import { fileTree } from "./data/fileTree";




function App() {

  return (
    <>
      <RecusiveComponent fileTree={fileTree} />
      </>
  )
}

export default App;
