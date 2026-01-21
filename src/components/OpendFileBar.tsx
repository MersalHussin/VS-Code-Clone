import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpendFileBarTab from "./OpendFileBarTab";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";

const OpendFileBar = () => {
      const {openedFiles , clickedFile} = useSelector((state:RootState)=> state.fileTree)
    return (

      <div>

        <div  className="flex gap-3 justify-start">
        {openedFiles.map((file)=> <OpendFileBarTab key={file.id} file={file} />)}
      </div>
        <div>
          <FileSyntaxHighlighter content={clickedFile.fileContent}/>
        {/* {clickedFile.fileContent} */}
        </div>
      </div>
    );
}

export default OpendFileBar;
