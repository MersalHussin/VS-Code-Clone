import type { IFileTree } from "../interfaces";

export const fileTree : IFileTree = {
  name: "vscode-clone",
  isFolder: true,
  children:[
    {
        name: "node_modules",
        isFolder: true,
        children:[
          {name:"public",isFolder:true, children:[
            {name:"index.js", isFolder:false}
          ]},
          {name:"vite",isFolder:true, children:[
            {name:"index.js", isFolder:false}
          ]}
        ]
    },
    {
        name: "src",
        isFolder: true,
        children: [
          {name: "components", isFolder: true, children: [
            {name: "FileTree.tsx", isFolder: false},
            {name: "Editor.tsx", isFolder: false}
          ]},
          {name: "App.tsx", isFolder: false},
          {name: "main.tsx", isFolder: false},
          {name: "index.css", isFolder: false}
        ]
    },
    {
        name: "index.html",
        isFolder: false
    },
    {
        name: "package.json",
        isFolder: false
    },
    {
        name: "vite.config.ts",
        isFolder: false
    }
  ],
}