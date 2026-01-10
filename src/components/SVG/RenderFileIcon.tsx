// import { File } from "lucide-react";

import { File } from "lucide-react";
import IconImage from "../IconImage";

interface IProps{
filename: string

}


const RenderFileIcon = ({filename}: IProps ) => {
    const extension = filename.split('.').pop()
    if(extension === "tsx") return  <IconImage extension={extension} src={`/icons/react_ts.svg`}   />
    if(extension === "jsx") return  <IconImage extension={extension} src={`/icons/react.svg`}   />
    if(extension === "js") return  <IconImage extension={extension} src={`/icons/javascript.svg`}   />
    return (
        // <IconImage extension={extension} src={`/icons/${extension}.svg`}   />
        <File/>
    );
}

export default RenderFileIcon;