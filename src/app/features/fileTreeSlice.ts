import { createSlice } from "@reduxjs/toolkit";
import type { IFileTree } from "../../interfaces";

interface IClickedFile{
    filename: string
    fileContent: string
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

    }
})

export default fileTreeSlice.reducer