import type { IFileTree } from "../interfaces";


export const fileTree : IFileTree = {
  id: "root", 
  name: "vscode-clone",
  isFolder: true,
  children:[
    {
        id: "node_modules", 
        name: "node_modules",
        isFolder: true,
        children:[
          {id: "node_modules-public", name:"public",isFolder:true, children:[
            { id: "node_modules-public-index",name:"index.js", isFolder:false,
              content: `// Public index.js
const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server running on port ' + port);
});`
            }
          ]},
          {id: "node_modules-vite", name:"vite",isFolder:true, children:[
            { id: "node_modules-vite-index",name:"index.js", isFolder:false,
              content: `// Vite module
export { defineConfig } from './config';
export { createServer } from './server';
export { build } from './build';`
            }
          ]}
        ]
    },
    {
        id: "src", 
        name: "src",
        isFolder: true,
        children: [
          {   id: "src-components", name: "components", isFolder: true, children: [
            {   id: "src-components-FileTree", name: "FileTree.tsx", isFolder: false,
              content: `import React from 'react';
import { File, Folder } from 'lucide-react';

interface FileTreeProps {
  data: any;
}

const FileTree: React.FC<FileTreeProps> = ({ data }) => {
  return (
    <div className="file-tree">
      <Folder size={16} />
      <span>{data.name}</span>
    </div>
  );
};

export default FileTree;`
            },
            {  id: "src-components-Editor", name: "Editor.tsx", isFolder: false,
              content: `import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface EditorProps {
  content: string;
  language?: string;
}

const Editor: React.FC<EditorProps> = ({ content, language = 'javascript' }) => {
  return (
    <div className="editor">
      <SyntaxHighlighter language={language} style={docco}>
        {content}
      </SyntaxHighlighter>
    </div>
  );
};

export default Editor;`
            }
          ]},
          {   id: "src-App", name: "App.tsx", isFolder: false,
            content: `import React from 'react';
import FileTree from './components/FileTree';
import Editor from './components/Editor';
import './index.css';

function App() {
  return (
    <div className="app">
      <h1>VS Code Clone</h1>
      <FileTree data={{}} />
      <Editor content="console.log('Hello World');" />
    </div>
  );
}

export default App;`
          },
          {  id: "src-main", name: "main.tsx", isFolder: false,
            content: `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);`
          },
          {  id: "src-index-css",  name: "index.css", isFolder: false,
            content: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen';
  background-color: #1e1e1e;
  color: #d4d4d4;
}

.app {
  display: flex;
  height: 100vh;
}`
          }]
    },
    {
        id: "index-html", 
        name: "index.html",
        isFolder: false,
        content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VS Code Clone</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
    },
    {
        id: "package-json", 
        name: "package.json",
        isFolder: false,
        content: `{
  "name": "vscode-clone",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "vite": "^4.4.0"
  }
}`
    },
    {
        id: "vite-config", 
        name: "vite.config.ts",
        isFolder: false,
        content: `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});`
    }
  ],
}