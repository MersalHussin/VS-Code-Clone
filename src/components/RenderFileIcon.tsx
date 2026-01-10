import IconImage from "./IconImage";

interface IProps{
filename: string
isOpenFolder?: boolean
isfolder?: boolean

}


const RenderFileIcon = ({filename,isOpenFolder,isfolder}: IProps ) => {
    const extension = filename.split('.').pop()
    if(extension === "ts") return  <IconImage extension={extension} src={`/icons/typescript.svg`}   />
    if(extension === "tsx") return  <IconImage extension={extension} src={`/icons/react_ts.svg`}   />
    if(extension === "jsx") return  <IconImage extension={extension} src={`/icons/react.svg`}   />
    if(extension === "js") return  <IconImage extension={extension} src={`/icons/javascript.svg`}   />
    // folders
    if(extension === "node_modules") return  <IconImage extension={extension} src={`/icons/folder-node${isOpenFolder ? "-open":""}.svg`}   /> 
    if(extension === "public") return  <IconImage extension={extension} src={`/icons/folder-public${isOpenFolder ? "-open":""}.svg`}   /> 
    if(extension === "src") return  <IconImage extension={extension} src={`/icons/folder-src${isOpenFolder ? "-open":""}.svg`}   /> 
    if(extension === "components") return  <IconImage extension={extension} src={`/icons/folder-components${isOpenFolder ? "-open":""}.svg`}   /> 
    if(extension === "vscode-clone") return  <IconImage extension={extension} src={`/icons/folder-vscode${isOpenFolder ? "-open":""}.svg`}   /> 
    if(isfolder) return  <IconImage extension={extension} src={`/icons/folder-default${isOpenFolder ? "-open":""}.svg`}   /> 
    return (
        <IconImage extension={extension} src={`/icons/${extension}.svg`}/>
        // <File/>
    );
}

export default RenderFileIcon;