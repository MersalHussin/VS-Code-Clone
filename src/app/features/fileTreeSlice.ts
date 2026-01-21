import { createSlice } from "@reduxjs/toolkit";
import type { IFileTree } from "../../interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IClickedFile{
    filename: string
    fileContent: string | undefined
}
interface IinitialState{
    openedFiles : IFileTree[]
    clickedFile: IClickedFile
}


const initialState:IinitialState = {
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
            state.clickedFile.filename = action.payload.filename;
            state.clickedFile.fileContent = action.payload.fileContent;
        }
    }
})

export const  {setOpenFiles , setOpendClickedFile} = fileTreeSlice.actions

export default fileTreeSlice.reducer;