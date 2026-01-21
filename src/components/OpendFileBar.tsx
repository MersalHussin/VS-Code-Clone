import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpendFileBarTab from "./OpendFileBarTab";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";

const OpendFileBar = () => {
      const {openedFiles , clickedFile} = useSelector((state:RootState)=> state.fileTree)
    return (

      <div className="w-full h-full">
        {openedFiles.length === 0 ? (
          <div className="flex items-center justify-center w-full h-screen">
            <img 
              src="/icons/vscode.svg" 
              alt="VS Code Logo" 
              className="w-64 h-64 opacity-40"
            />
          </div>
        ) : (
          <>
            <div className="flex gap-3 justify-start">
              {openedFiles.map((file)=> <OpendFileBarTab key={file.id} file={file} />)}
            </div>
            <div>
              <FileSyntaxHighlighter content={clickedFile.fileContent}/>
            </div>
          </>
        )}
      </div>
    );
}

export default OpendFileBar;
