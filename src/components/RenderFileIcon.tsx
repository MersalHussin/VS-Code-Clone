import { extensionIconPath } from "../consts";
import IconImage from "./IconImage";

interface IProps{
filename: string
isOpenFolder?: boolean
isfolder?: boolean
}

const RenderFileIcon = ({filename,isOpenFolder,isfolder}: IProps ) => {
    const extension = filename.split('.').pop()
    if(extension && Object.prototype.hasOwnProperty.call(extensionIconPath,extension)){
        const iconPath = isfolder 
        ? isOpenFolder
            ? `${extensionIconPath[extension]}-open.svg` 
            : `${extensionIconPath[extension]}.svg` 
        : `${extensionIconPath[extension]}.svg` 
       return <IconImage extension={extension} src={iconPath}/>
    }else{
        return isfolder ? isOpenFolder ? <IconImage src={extensionIconPath["default_folder"] + "-open.svg"}/> : <IconImage src={extensionIconPath["default_folder"] + ".svg"}/> :<IconImage extension={extension} src={`/icons/${extension}.svg`}/>

    }
    return         <IconImage extension={extension} src={`/icons/${extension}.svg`}/>

}

export default RenderFileIcon;