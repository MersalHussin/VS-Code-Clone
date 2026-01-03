import File from "./SVG/File";

interface IProps{
fileName: string

}


const FileComponent = ({fileName = "index.tsx"}: IProps ) => {
    return (
    <div className="flex flex-row mt-2" >
      <span className="text-2xl text-white" >
        <File/>
      </span>
      <span>{fileName}</span>
    </div>
    );
}

export default FileComponent;