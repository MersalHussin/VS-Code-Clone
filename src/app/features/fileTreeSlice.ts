import { createSlice } from "@reduxjs/toolkit";
import type { IFileTree } from "../../interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IClickedFile{
    activeTabId:  string | null,
    filename: string,
    fileContent: string | undefined

}
interface IinitialState{
    openedFiles : IFileTree[]
    clickedFile: IClickedFile
    hoveredFileId: string | null
}


const initialState:IinitialState = {
    openedFiles: [],
    clickedFile: {
        activeTabId: null,
        filename :"",
        fileContent:""

    },
    hoveredFileId: null
}
const fileTreeSlice = createSlice({
    name:"fileTree",
    initialState:initialState,
    reducers:{
        setOpenFiles:(state,action:PayloadAction<IFileTree[]>) => {
            state.openedFiles = action.payload;
        },
        setOpendClickedFile:(state, action:PayloadAction<IClickedFile>) => {
            state.clickedFile = action.payload;
        },
        setHoveredFileId:(state, action:PayloadAction<string | null>) => {
            state.hoveredFileId = action.payload;
        },
    }
})

export const  {setOpenFiles , setOpendClickedFile, setHoveredFileId} = fileTreeSlice.actions

export default fileTreeSlice.reducer;