export interface IFileTree{
    name: string,
    isFolder: boolean
    // children?: {name:string}[]
    children?: IFileTree[]
    content?: string
}