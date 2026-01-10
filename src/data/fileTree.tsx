import type { IFileTree } from "../interfaces";

export const fileTree : IFileTree = {
  name: "VS Code Clone",
  isFolder: true,
  children:[
    {
        name: "node_modules",
        isFolder: true,
        children:[
          {name:".vite",isFolder:true, children:[
              {name:"Mersal.tsx", isFolder:false}
          ]},
          {name:"react.tsx",isFolder:false},
          {name:"HBD.jsx",isFolder:false},
          {name:"Button.js",isFolder:false}
        ]
    },
    {
        name: "index.html",
        isFolder: false
    },
  ],
}