"use strict";(self.webpackChunkcs102_handbook=self.webpackChunkcs102_handbook||[]).push([[7435],{316:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>t,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var o=n(5893),l=n(1151);const s={},t="Bowling",a={id:"lab-walkthroughs/bowling",title:"Bowling",description:"Build a text-based bowling game.",source:"@site/docs/lab-walkthroughs/bowling.md",sourceDirName:"lab-walkthroughs",slug:"/lab-walkthroughs/bowling",permalink:"/cs102-handbook/docs/lab-walkthroughs/bowling",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"Sidebar",previous:{title:"BITSET",permalink:"/cs102-handbook/docs/lab-walkthroughs/bitset"},next:{title:"Calculator",permalink:"/cs102-handbook/docs/lab-walkthroughs/calculator"}},i={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Bowling Lab",id:"bowling-lab",level:2},{value:"Program flow",id:"program-flow",level:2},{value:"Algorithm",id:"algorithm",level:2},{value:"1. Scoring the game",id:"1-scoring-the-game",level:3},{value:"2. Scoring the frame",id:"2-scoring-the-frame",level:3},{value:"For each frame",id:"for-each-frame",level:3},{value:"TLDR",id:"tldr",level:3},{value:"Input/Output requirements",id:"inputoutput-requirements",level:2},{value:"example output 1",id:"example-output-1",level:3},{value:"example output 2",id:"example-output-2",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Bye",id:"bye",level:2}];function c(e){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"bowling",children:"Bowling"}),"\n",(0,o.jsx)(r.p,{children:"Build a text-based bowling game."}),"\n",(0,o.jsx)(r.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(r.p,{children:"This lab is simple on the surface, but annoying to implement. It'll be good for refining your logic and reasoning skills. That and you'll learn how to score bowling!"}),"\n",(0,o.jsx)(r.h2,{id:"bowling-lab",children:"Bowling Lab"}),"\n",(0,o.jsx)(r.p,{children:"Here's how bowling is scored at a high level:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"A game consists of 10 frames"}),"\n",(0,o.jsx)(r.li,{children:"Each frame consists of 2 rolls"}),"\n",(0,o.jsx)(r.li,{children:"The 10th frame can have 3 rolls if the first 2 rolls are a strike or spare"}),"\n",(0,o.jsxs)(r.li,{children:["A strike is when you knock down all 10 pins with the ",(0,o.jsx)(r.strong,{children:"first"})," roll of a frame"]}),"\n",(0,o.jsxs)(r.li,{children:["A spare is when you knock down all 10 pins with the ",(0,o.jsx)(r.strong,{children:"second"})," roll of a frame"]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Barring strikes and spares, a game's total score is the sum of the number of pins knocked down in each frame. The highest possible score is 300, consisting of 12 strikes."}),"\n",(0,o.jsx)(r.p,{children:"Strikes and spares are a bit more complicated. A strike's value is 10 plus the number of pins knocked down in the next 2 rolls. A spare's value is 10 plus the number of pins knocked down in the next roll. If it's the 10th frame, then you will have 2 rolls to start. If you get a strike or spare, then you will have 1 more roll to finish the frame, making 3 rolls total. Otherwise, it's just 2 rolls for the last frame."}),"\n",(0,o.jsx)(r.h2,{id:"program-flow",children:"Program flow"}),"\n",(0,o.jsx)(r.p,{children:"Here's a rough outline of the program flow:"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:"The player is prompted to enter their name"}),"\n",(0,o.jsxs)(r.li,{children:["The player enters the number of pins knocked down in each roll for every frame. If the first roll of a frame is a strike, then the 2nd roll is not prompted. Although you will still need to store the 2nd roll's value as 0, even though you won't be asking for the user to enter the 2nd roll. (",(0,o.jsx)(r.em,{children:"So notice we're storing our rolls in a vector or array"}),")"]}),"\n",(0,o.jsxs)(r.li,{children:["Once all frames have been entered, ",(0,o.jsx)(r.strong,{children:"evaluate"})," (don't print) the score for the player and store it. (",(0,o.jsx)(r.em,{children:"So we use a separate vector or array to store the scores"}),")"]}),"\n",(0,o.jsxs)(r.li,{children:["Repeat until the player enters ",(0,o.jsx)(r.code,{children:"done"})," when prompted for their name"]}),"\n",(0,o.jsx)(r.li,{children:"Print the scores for each player and the winner"}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Also note that the player can enter ",(0,o.jsx)(r.code,{children:"done"})," at the beginning of the game, in which case no scores will be evaluated, and the print statement will be different."]}),"\n",(0,o.jsx)(r.h2,{id:"algorithm",children:"Algorithm"}),"\n",(0,o.jsx)(r.p,{children:"Algorithmically speaking, we can break this down into 2 parts:"}),"\n",(0,o.jsx)(r.h3,{id:"1-scoring-the-game",children:"1. Scoring the game"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"For each frame, we need to know the number of pins knocked down in each roll and tally it up according to the scoring rules"}),"\n",(0,o.jsx)(r.li,{children:"If it's the last frame, its score is simply the sum of the number of pins knocked down in each roll, since there are no frames after for strikes/spares"}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"2-scoring-the-frame",children:"2. Scoring the frame"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"If it's not a strike or spare, then the score is the sum of the number of pins knocked down in each roll"}),"\n",(0,o.jsx)(r.li,{children:"If it's a strike, then the score is 10 plus the number of pins knocked down in the next 2 rolls"}),"\n",(0,o.jsx)(r.li,{children:"If it's a spare, then the score is 10 plus the number of pins knocked down in the next roll"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"More specifically, scoring a frame is as follows:"}),"\n",(0,o.jsx)(r.h3,{id:"for-each-frame",children:"For each frame"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Get the number of pins knocked down in each roll"}),"\n",(0,o.jsx)(r.li,{children:"Determine if the frame was a strike or spare"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"If it was a strike, then get the current frame's score plus the next 2 rolls"}),"\n",(0,o.jsx)(r.p,{children:"If it was a spare, then get the current frame's score plus the next roll"}),"\n",(0,o.jsx)(r.p,{children:"Otherwise, just get the current frame's score"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Repeat until all frames are scored"}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"tldr",children:"TLDR"}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.em,{children:"general"})," formula for scoring a frame is:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:"score += current_frame.roll1 + current_frame.roll2 # base case -- always do this\nscore += next_frame.roll1 + next_frame.roll2 # if strike\nscore += next_frame.roll1 # if spare\n"})}),"\n",(0,o.jsx)(r.p,{children:"The caveats to consider are"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:"You'll need to score the 10th frame slightly differently. It should be evaluated separately from the other frames."}),"\n",(0,o.jsxs)(r.li,{children:["If you get a strike two frames in a row, then you won't be able to do ",(0,o.jsx)(r.code,{children:"score += next_frame.roll1 + next_frame.roll2"}),", because ",(0,o.jsx)(r.code,{children:"roll2"})," in the next frame should be 0. You'll need to jump an extra frame ahead and get the next roll from there."]}),"\n",(0,o.jsx)(r.li,{children:"If you get a strike in the 9th frame as well as the 10th frame, then you'll need to make sure not to go a frame too far when scoring the 9th frame."}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"inputoutput-requirements",children:"Input/Output requirements"}),"\n",(0,o.jsx)(r.p,{children:"There are no special formatting requirements for this lab. Just output the words and lines as shown in the sample output."}),"\n",(0,o.jsx)(r.p,{children:"As for the input requirements, just make sure your data types are what they should be. No error checking is required."}),"\n",(0,o.jsx)(r.h3,{id:"example-output-1",children:"example output 1"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-txt",children:"Enter player's name (done for no more players): John\nEnter score for frame 1, roll 1: 10\nEnter score for frame 2, roll 1: 10\nEnter score for frame 3, roll 1: 10\nEnter score for frame 4, roll 1: 10\nEnter score for frame 5, roll 1: 10\nEnter score for frame 6, roll 1: 10\nEnter score for frame 7, roll 1: 10\nEnter score for frame 8, roll 1: 10\nEnter score for frame 9, roll 1: 10\nEnter score for frame 10, roll 1: 10\nEnter score for frame 10, roll 2: 10\nEnter score for frame 10, roll 3: 10\nEnter player's name (done for no more players): Cheryl\nEnter score for frame 1, roll 1: 8\nEnter score for frame 1, roll 2: 1\nEnter score for frame 2, roll 1: 0\nEnter score for frame 2, roll 2: 9\nEnter score for frame 3, roll 1: 2\nEnter score for frame 3, roll 2: 8\nEnter score for frame 4, roll 1: 10\nEnter score for frame 5, roll 1: 6\nEnter score for frame 5, roll 2: 3\nEnter score for frame 6, roll 1: 7\nEnter score for frame 6, roll 2: 0\nEnter score for frame 7, roll 1: 5\nEnter score for frame 7, roll 2: 2\nEnter score for frame 8, roll 1: 10\nEnter score for frame 9, roll 1: 0\nEnter score for frame 9, roll 2: 6\nEnter score for frame 10, roll 1: 2\nEnter score for frame 10, roll 2: 8\nEnter score for frame 10, roll 3: 10\nEnter player's name (done for no more players): done\n\nJohn scored 300.\nCheryl scored 122.\nCheryl did the worst by scoring 122.\nJohn won the game by scoring 300.\n"})}),"\n",(0,o.jsx)(r.h3,{id:"example-output-2",children:"example output 2"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-txt",children:"Enter player's name (done for no more players): John\nEnter score for frame 1, roll 1: 8\nEnter score for frame 1, roll 2: 1\nEnter score for frame 2, roll 1: 0\nEnter score for frame 2, roll 2: 9\nEnter score for frame 3, roll 1: 2\nEnter score for frame 3, roll 2: 8\nEnter score for frame 4, roll 1: 10\nEnter score for frame 5, roll 1: 6\nEnter score for frame 5, roll 2: 3\nEnter score for frame 6, roll 1: 7\nEnter score for frame 6, roll 2: 0\nEnter score for frame 7, roll 1: 5\nEnter score for frame 7, roll 2: 2\nEnter score for frame 8, roll 1: 10\nEnter score for frame 9, roll 1: 0\nEnter score for frame 9, roll 2: 6\nEnter score for frame 10, roll 1: 2\nEnter score for frame 10, roll 2: 8\nEnter score for frame 10, roll 3: 10\nEnter player's name (done for no more players): done\n\nJohn scored 122.\nJohn did the worst by scoring 122.\nJohn won the game by scoring 122.\n"})}),"\n",(0,o.jsx)(r.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsx)(r.p,{children:"As per the lab's instructions, you'll need to implement the following:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"vector"})," of ",(0,o.jsx)(r.code,{children:"string"}),"s to store the name(s) of the player(s)"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"vector"})," of 21 ",(0,o.jsx)(r.code,{children:"int"}),"s to store 2 rolls per frame, plus 1 roll for the 10th frame (if applicable)"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"vector"})," of ",(0,o.jsx)(r.code,{children:"int"}),"s to store the score(s) of the player(s)"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Each player must enter their name and subsequently their score for each roll of each frame"}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Once the player has quit the game (by entering ",(0,o.jsx)(r.code,{children:"done"})," when prompted for their name), the game should be scored and the results should be printed"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"bye",children:"Bye"}),"\n",(0,o.jsx)(r.p,{children:"Good luck! Open a ticket on Discord or come to office hours if you have any questions, as always."})]})}function d(e={}){const{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>t});var o=n(7294);const l={},s=o.createContext(l);function t(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);