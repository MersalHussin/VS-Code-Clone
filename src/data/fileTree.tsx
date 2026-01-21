import type { IFileTree } from "../interfaces";
import { v4 as uuid } from 'uuid';


export const fileTree : IFileTree = {
  id: uuid(), 
  name: "vscode-clone",
  isFolder: true,
  children:[
    {
        id: uuid(), 
        name: "node_modules",
        isFolder: true,
        children:[
          {id: uuid(), name:"public",isFolder:true, children:[
            { id: uuid(),name:"index.js", isFolder:false,
              content: `console.log("Hello World")`
            }
          ]},
          {id: uuid(), name:"vite",isFolder:true, children:[
            { id: uuid(),name:"index.js", isFolder:false,
              content: `console.log("Hello World")`
            }
          ]}
        ]
    },
    {
        id: uuid(), 
        name: "src",
        isFolder: true,
        children: [
          {   id: uuid(), name: "components", isFolder: true, children: [
            {   id: uuid(), name: "FileTree.tsx", isFolder: false,
              content: `console.log("Hello World")`
            },
            {  id: uuid(), name: "Editor.tsx", isFolder: false,
              content: `console.log("Hello World")`
            }
          ]},
          {   id: uuid(), name: "App.tsx", isFolder: false,
            content: `console.log("Hello World")`
          },
          {  id: uuid(), name: "main.tsx", isFolder: false,
            content: `console.log("Hello World")`
          },
          {  id: uuid(), name: "main.tsx", isFolder: false,
            content: `console.log("Hello World")`
          },
          {  id: uuid(),  name: "index.css", isFolder: false,
            content: `console.log("Hello World")`
          }]
    },
    {
        id: uuid(), 
        name: "index.html",
        isFolder: false,
        content: `console.log("Hello World")`
    },
    {
        id: uuid(), 
        name: "package.json",
        isFolder: false,
        content: `console.log("Hello World")`
    },
    {
        id: uuid(), 
        name: "vite.config.ts",
        isFolder: false,
        content: `console.log("Hello World")`
    }
  ],
}