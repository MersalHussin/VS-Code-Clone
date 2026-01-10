import Folder from "./SVG/Folder";

interface IProps{
foldername: string

}


const FolderComponent = ({foldername = "index.tsx"}: IProps ) => {
    return (
    <div className="flex flex-row mt-2" >
      <span className="text-2xl text-white" >
        <Folder/>
      </span>
      <span>{foldername}</span>
    </div>
    );
}

export default FolderComponent;