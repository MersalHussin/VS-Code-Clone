import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpendFileBarTab from "./OpendFileBarTab";

const OpendFileBar = () => {
      const {openedFiles} = useSelector((state:RootState)=> state.fileTree)
    return (

        <ul  className="flex gap-3 justify-center">
        {openedFiles.map((file)=> <OpendFileBarTab key={file.id} file={file} />)}
      </ul>
    );
}

export default OpendFileBar;
