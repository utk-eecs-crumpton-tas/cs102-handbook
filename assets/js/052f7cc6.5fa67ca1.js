"use strict";(self.webpackChunkcs102_handbook=self.webpackChunkcs102_handbook||[]).push([[199],{9394:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var s=i(4848),c=i(8453);const d={sidebar_position:4},o="Vim Cheatsheet",t={id:"reference/vim-cheatsheet",title:"Vim Cheatsheet",description:"Basic Vim motions to get you started.",source:"@site/docs/reference/vim-cheatsheet.md",sourceDirName:"reference",slug:"/reference/vim-cheatsheet",permalink:"/cs102-handbook/docs/reference/vim-cheatsheet",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"Sidebar",previous:{title:"VSCode Tips",permalink:"/cs102-handbook/docs/reference/vscode-tips"},next:{title:"Swap Files",permalink:"/cs102-handbook/docs/reference/swap-files"}},r={},l=[{value:"Movement",id:"movement",level:2},{value:"Editing",id:"editing",level:2},{value:"Visual Mode",id:"visual-mode",level:2},{value:"Insert Mode",id:"insert-mode",level:2},{value:"Exiting",id:"exiting",level:2},{value:"Neovim keymaps",id:"neovim-keymaps",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"vim-cheatsheet",children:"Vim Cheatsheet"}),"\n",(0,s.jsx)(n.p,{children:"Basic Vim motions to get you started."}),"\n",(0,s.jsx)(n.h2,{id:"movement",children:"Movement"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"h j k l"})," - Left, Down, Up, Right (recommended over the arrow keys)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"w b"})," - Go forward a word, go back a word"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{ }"})," - Jump up and down whole code blocks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gg"})," - Go to the top of the document"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"G"})," - Go to the bottom of the document"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0"})," - Go to the beginning of the line"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"^"})," - Go to the first non-whitespace character of the line"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$"})," - Go to the end of the line"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"editing",children:"Editing"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"yy"})," - Copy a line"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dd"})," - Delete a line (similar to cut)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"p"})," - Paste what was yanked or deleted after the cursor"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"u"})," - Undo"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ctrl + r"})," - Redo"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"x"})," - Delete a character"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"r"})," - Replace a character"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"d"})," or ",(0,s.jsx)(n.code,{children:"y"})," combined with any other movement options to delete or yank different selections like ",(0,s.jsx)(n.code,{children:"dw"})," to delete a word or ",(0,s.jsx)(n.code,{children:"dj"})," to delete the line and the line below it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shift + d"})," - Delete from the cursor to the end of the line"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shift + y"})," - Copy from the cursor to the end of the line"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shift + p"})," - Paste before the cursor"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gg=G"})," - Format your document"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"visual-mode",children:"Visual Mode"}),"\n",(0,s.jsx)(n.p,{children:"Used for highlighting and selecting text."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"v"})," - visual mode for text selection"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shift + v"})," - visual line mode, for selecting whole lines"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"y d"})," - in visual mode to copy or cut selection"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"p"})," - Paste over selection"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"insert-mode",children:"Insert Mode"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"i"})," - Insert mode before the cursor"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"a"})," - Insert mode after the cursor"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shift + i"})," - Insert mode at the beginning of the line"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shift + a"})," - Insert mode at the end of the line"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"o"})," - Insert mode on a new line below the cursor"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shift + o"})," - Insert mode on a new line above the cursor"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"c"})," - Same as ",(0,s.jsx)(n.code,{children:"d"})," but also enters insert mode"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cc"})," - Delete a line and enter insert mode"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shift + c"})," - Delete from the cursor to the end of the line and enter insert mode"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"escape"})," - exit insert mode"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exiting",children:"Exiting"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:":q"})," - Close a document"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:":wq"})," - Save and exit a document"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:":q!"})," - Close the document without saving"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shift + zz"})," - An alias for ",(0,s.jsx)(n.code,{children:":wq"})," to save and exit a document"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shift + zq"})," - An alias for ",(0,s.jsx)(n.code,{children:":q!"})," to save and exit a document"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"neovim-keymaps",children:"Neovim keymaps"}),"\n",(0,s.jsx)(n.p,{children:"Useful actions specific to Neovim kickstart."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ctrl + y"})," - Accept autocomplete suggestion"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"space f"})," - Autoformat with ",(0,s.jsx)(n.code,{children:"clang-foramt"}),", much more thorough formatter than ",(0,s.jsx)(n.code,{children:"gg=G"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"space rn"})," - Rename the variable under the cursor"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gcc"})," - Comment toggle a line"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"space ds"})," - Search document symbols: functions, class names, etc"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"space /"})," - Search the current file"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shift + K"})," - Show LSP information for the symbol under the cursor"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to dive deeper into Vim, this YouTuber, ",(0,s.jsx)(n.a,{href:"https://www.youtube.com/@ThePrimeagen",children:"The Primeagen"})," is a good place to start."]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>t});var s=i(6540);const c={},d=s.createContext(c);function o(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);