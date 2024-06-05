"use strict";(self.webpackChunkcs102_handbook=self.webpackChunkcs102_handbook||[]).push([[3587],{248:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var s=n(5893),t=n(1151);const a={sidebar_position:5},l="Swap Files",o={id:"reference/swap-files",title:"Swap Files",description:"What is a swap file?",source:"@site/docs/reference/swap-files.md",sourceDirName:"reference",slug:"/reference/swap-files",permalink:"/cs102-handbook/docs/reference/swap-files",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"Sidebar",previous:{title:"Vim Cheatsheet",permalink:"/cs102-handbook/docs/reference/vim-cheatsheet"},next:{title:"Grading",permalink:"/cs102-handbook/docs/category/grading"}},r={},h=[{value:"What is a swap file?",id:"what-is-a-swap-file",level:2},{value:"Viewing the current file",id:"viewing-the-current-file",level:2},{value:"Deleting the swap file",id:"deleting-the-swap-file",level:2},{value:"Recovering the swap file",id:"recovering-the-swap-file",level:2},{value:"Quitting or Aborting",id:"quitting-or-aborting",level:2},{value:"Disabling swap files",id:"disabling-swap-files",level:2}];function d(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"swap-files",children:"Swap Files"}),"\n",(0,s.jsx)(i.h2,{id:"what-is-a-swap-file",children:"What is a swap file?"}),"\n",(0,s.jsx)(i.p,{children:"If you have Vim open, and a session ends unexpectedly (such as closing the terminal while Vim is open), the unsaved changes you have made will be stored in a swap file.\nIf a swap file exists, a screen will pop up displaying the location of the swap file and a list of actions you can take."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-txt",children:'E325: ATTENTION\nFound a swap file by the name ".file.txt.swp"\n          owned by: abradl11   dated: Fri Jan 12 09:17:55 2024\n         file name: ~abradl11/file.txt\n          modified: YES\n         user name: abradl11   host name: hydra0.eecs.utk.edu\n        process ID: 865209\nWhile opening file "file.txt"\n             dated: Fri Jan 12 09:15:42 2024\n\n(1) Another program may be editing the same file.  If this is the case,\n    be careful not to end up with two different instances of the same\n    file when making changes.  Quit, or continue with caution.\n(2) An edit session for this file crashed.\n    If this is the case, use ":recover" or "vim -r file.txt"\n    to recover the changes (see ":help recovery").\n    If you did this already, delete the swap file ".file.txt.swp"\n    to avoid this message.\n\nSwap file ".file.txt.swp" already exists!\n[O]pen Read-Only, (E)dit anyway, (R)ecover, (D)elete it, (Q)uit, (A)bort:\n'})}),"\n",(0,s.jsx)(i.h2,{id:"viewing-the-current-file",children:"Viewing the current file"}),"\n",(0,s.jsxs)(i.p,{children:["Using the ",(0,s.jsx)(i.code,{children:"[O]pen Read-Only"})," will let you see the current contents of the file without the changes saved in the swap file."]}),"\n",(0,s.jsxs)(i.p,{children:["Using the ",(0,s.jsx)(i.code,{children:"(E)dit anyway"})," will let you open the current file and make changes to it."]}),"\n",(0,s.jsx)(i.admonition,{type:"danger",children:(0,s.jsx)(i.p,{children:"If you make changes to your file and then choose to recover your swap file, the changes you made will be overwritten."})}),"\n",(0,s.jsx)(i.h2,{id:"deleting-the-swap-file",children:"Deleting the swap file"}),"\n",(0,s.jsx)(i.p,{children:"If you have not made many unsaved changes, the easiest course of action to to simply delete the swap file and continue editing where you left off. Deleting the swap file will prevent the dialogue from popping up when you open Vim. There are two ways to delete the swap file."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["One of the options may pop up saying ",(0,s.jsx)(i.code,{children:"(D)elete it"}),". If you press this option, it will delete the swap file and open up your file for editing as normal without applying the changes from the swap file."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["You can remove the swap file manually. A path should appear on the screen ",(0,s.jsx)(i.code,{children:'Found a swap file by the name ".file.txt.swp"'}),". To remove the file, you can simply use"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"rm .file.txt.swp\n"})}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["Files preceded by a dot will not appear in the directory normally with the ",(0,s.jsx)(i.code,{children:"ls"})," command. You must use ",(0,s.jsx)(i.code,{children:"ls -a"})," to list them."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"recovering-the-swap-file",children:"Recovering the swap file"}),"\n",(0,s.jsxs)(i.p,{children:["If you have made significant unsaved changes to your file and wish to recover them from your swap file, you can use the ",(0,s.jsx)(i.code,{children:"(R)ecover"})," option. This will open up the editor with the changes from the swap file. If you wish to keep the changes from the swap file, you must write and quit as normal ",(0,s.jsx)(i.code,{children:":wq"}),". If you wish to discard the changes from the swap file, you can use ",(0,s.jsx)(i.code,{children:":q!"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"In either case, whether you apply or discard the changes, you must manually delete the swap file to prevent the dialogue from popping up again."}),"\n",(0,s.jsx)(i.admonition,{type:"danger",children:(0,s.jsx)(i.p,{children:"If you recover your changes, don't delete the swap file, continue editing the file, then recover the swap file a second time, the changes will be reverted to the first time you recovered the swap file and your changes after recovering will be overwritten."})}),"\n",(0,s.jsx)(i.h2,{id:"quitting-or-aborting",children:"Quitting or Aborting"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"(Q)uit"})," and ",(0,s.jsx)(i.code,{children:"(A)bort"})," options will simply close Vim."]}),"\n",(0,s.jsx)(i.h2,{id:"disabling-swap-files",children:"Disabling swap files"}),"\n",(0,s.jsx)(i.p,{children:"If you wish the prevent Vim from creating swap files altogether, this is possible, however, if you disable swap files, there will be no way to recover any unsaved changes you have made if Vim quits unexpectedly."}),"\n",(0,s.jsx)(i.p,{children:"To disable the swap files in Vim, open up the vimrc"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"vim ~/.vimrc\n"})}),"\n",(0,s.jsx)(i.p,{children:"And add the following line"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-vim",children:"set noswapfile\n"})}),"\n",(0,s.jsxs)(i.p,{children:["To disable swap files in Neovim open the ",(0,s.jsx)(i.code,{children:"init.lua"})," file"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"nvim ~/.config/nvim/init.lua\n"})}),"\n",(0,s.jsx)(i.p,{children:"and all the following line"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-lua",children:"vim.opt.swapfile = false\n"})})]})}function c(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>l});var s=n(7294);const t={},a=s.createContext(t);function l(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);