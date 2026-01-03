import type { IFileTree } from "../interfaces";

export const fileTree : IFileTree = {
  name: "VS Code Clone",
    isFolder: true,
  children:[
    {
        name: "node_modules",
        isFolder: true
    },
    {
        name: "index.html",
        isFolder: false
    },
  ],
}