import IconImage from "./IconImage";

interface IProps{
filename: string
isOpenFolder?: boolean
isfolder?: boolean
}

const extensionIconPath: Record<string,string> = {
    // Files
    tsx:"/icons/typescript",
    ts:"/icons/react_ts",
    js:"/icons/react",
    jsx:"/icons/javascript",
    html:"/icons/html",
    default_file:"/icons/default",
    
    // Folders
    node_modules:"/icons/folder-node",
    vscode:"/icons/folder-vscode",
    public:"/icons/folder-public",
    src:"/icons/folder-src",
    components:"/icons/folder-components",
    default_folder:"/icons/folder-default",

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