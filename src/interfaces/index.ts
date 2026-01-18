export interface IFileTree{
    id: string,
    name: string,
    isFolder: boolean
    // children?: {name:string}[]
    children?: IFileTree[]
    content?: string
}
