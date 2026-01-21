import { useEffect, useRef } from "react";
import { useDispatch, useSelector} from "react-redux";
import type { RootState } from "../../app/store";
import { setOpenFiles, setOpendClickedFile } from "../../app/features/fileTreeSlice";

interface IProps{
postion: {x:number, y:number}
setShowMenu: (val:boolean) => void;
fileId?: string | null;
}




const DropMenu = ({postion , setShowMenu, fileId}: IProps ) => {
    const dispatch = useDispatch()
    const {openedFiles, hoveredFileId} = useSelector((state:RootState) => state.fileTree)
    
    // Use hoveredFileId if available, otherwise use fileId
    const targetFileId = hoveredFileId || fileId
    
    // Functions: 
    const closeFile = () => {
        if (targetFileId) {
            const filtered = openedFiles.filter(file => file.id !== targetFileId)
            dispatch(setOpenFiles(filtered))
            
            if (filtered.length > 0) {
                const lastItem = filtered[filtered.length - 1]
                dispatch(setOpendClickedFile({activeTabId: lastItem.id, fileContent: lastItem.content, filename: lastItem.name}))
            } else {
                dispatch(setOpendClickedFile({activeTabId: null, fileContent: "", filename: ""}))
            }
        }
        setShowMenu(false)
    }
    
    const closeAll = () => {
        dispatch(setOpenFiles([]))
        dispatch(setOpendClickedFile({activeTabId: null, fileContent: "", filename: ""}))
        setShowMenu(false)
    }
    
    const menuRef = useRef<HTMLDivElement>(null)

useEffect(()=>{
    const handleClickOutside = (event: MouseEvent)=>{
        if(menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShowMenu(false)
        }
    }
    window.addEventListener('click',handleClickOutside)

    return() =>{
        window.removeEventListener('click', handleClickOutside)
    }
},[setShowMenu])

    return (
        <div ref={menuRef}>
        <ul className="bg-[#252526] text-[#cccccc] shadow-2xl border border-[#454545] rounded-sm py-1 min-w-[180px] z-50" style={{position:"absolute",left:postion.x,top:postion.y }}>
            <li onClick={closeFile} className="px-4 py-2 hover:bg-[#2a2d2e] cursor-pointer transition text-sm flex items-center gap-2">
                <span>✕</span> Close
            </li>
            <div className="border-t border-[#454545] my-1"></div>
            <li onClick={closeAll} className="px-4 py-2 hover:bg-[#2a2d2e] cursor-pointer transition text-sm flex items-center gap-2">
                <span>⊗</span> Close All
            </li>
        </ul>
        </div>
    );
}
export default DropMenu;
