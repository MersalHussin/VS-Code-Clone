import { svgStyles } from "../styles";
import File from "./SVG/File";

interface IProps{
fileName: string

}


const FileComponent = ({fileName = "index.tsx"}: IProps ) => {
    return (
    <div className="flex flex-row mt-2" >
      <svg xmlns="http://www.w3.org/2000/svg" {...svgStyles}><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
      <span className="text-2xl text-white" >
        <File/>
      </span>
      <span>{fileName}</span>
    </div>
    );
}

export default FileComponent;