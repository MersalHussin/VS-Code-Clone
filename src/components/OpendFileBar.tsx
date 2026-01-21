import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpendFileBarTab from "./OpendFileBarTab";

const OpendFileBar = () => {
      const {openedFiles , clickedFile} = useSelector((state:RootState)=> state.fileTree)
    return (

      <div>

        <div  className="flex gap-3 justify-center">
        {openedFiles.map((file)=> <OpendFileBarTab key={file.id} file={file} />)}
      </div>
        <div>
        {clickedFile.fileContent}
        </div>
      </div>
    );
}

export default OpendFileBar;
