import { createSlice } from "@reduxjs/toolkit";
import type { IFileTree } from "../../interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IClickedFile{
    filename: string
    fileContent: string | undefined
}
interface IinitialState{
    activeTabId: string | null
    openedFiles : IFileTree[]
    clickedFile: IClickedFile
}


const initialState:IinitialState = {
    activeTabId: null,
    openedFiles: [],
    clickedFile: {
        filename :"",
        fileContent:""
    }
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
        setActiveTabId:(state, action:PayloadAction<string | null>) => {
            state.activeTabId = action.payload;
        }
    }
})

export const  {setOpenFiles , setOpendClickedFile , setActiveTabId} = fileTreeSlice.actions

export default fileTreeSlice.reducer;