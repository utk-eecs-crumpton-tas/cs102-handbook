"use strict";(self.webpackChunkcs102_handbook=self.webpackChunkcs102_handbook||[]).push([[1763],{3349:(e,t,n)=>{n.d(t,{a:()=>l});var r=n(6225);function l(e,t){var n=e.append("foreignObject").attr("width","100000"),l=n.append("xhtml:div");l.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":l.insert(o);break;case"object":l.insert((function(){return o}));break;default:l.html(o)}r.bg(l,t.labelStyle),l.style("display","inline-block"),l.style("white-space","nowrap");var a=l.node().getBoundingClientRect();return n.attr("width",a.width).attr("height",a.height),n}},6225:(e,t,n)=>{n.d(t,{$p:()=>d,O1:()=>a,WR:()=>p,bF:()=>o,bg:()=>c});var r=n(7514),l=n(3234);function o(e,t){return!!e.children(t).length}function a(e){return i(e.v)+":"+i(e.w)+":"+i(e.name)}var s=/:/g;function i(e){return e?String(e).replace(s,"\\:"):""}function c(e,t){t&&e.attr("style",t)}function d(e,t,n){t&&e.attr("class",t).attr("class",n+" "+e.attr("class"))}function p(e,t){var n=t.graph();if(r.Z(n)){var o=n.transition;if(l.Z(o))return o(e)}return e}},1763:(e,t,n)=>{n.d(t,{diagram:()=>i});var r=n(8955),l=(n(5625),n(4218));n(5322),n(7452),n(3688),n(870),n(1644),n(6225);n(3349);n(6749),n(4379);n(1666);l.c_6;var o=n(1358);n(7484),n(7967),n(7856),n(9354);const a={},s=function(e){const t=Object.keys(e);for(const n of t)a[n]=e[n]},i={parser:r.p,db:r.f,renderer:o.f,styles:o.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,s(e.flowchart),r.f.clear(),r.f.setGen("gen-1")}}},1358:(e,t,n)=>{n.d(t,{a:()=>h,f:()=>u});var r=n(5625),l=n(4218),o=n(5322),a=n(7936),s=n(3349),i=n(1691),c=n(1610);const d=(e,t)=>i.Z.lang.round(c.Z.parse(e)[t]);var p=n(1117);const b={},f=function(e,t,n,r,l,a){const i=r.select(`[id="${n}"]`);Object.keys(e).forEach((function(n){const r=e[n];let c="default";r.classes.length>0&&(c=r.classes.join(" ")),c+=" flowchart-label";const d=(0,o.k)(r.styles);let p,b=void 0!==r.text?r.text:r.id;if(o.l.info("vertex",r,r.labelType),"markdown"===r.labelType)o.l.info("vertex",r,r.labelType);else if((0,o.m)((0,o.c)().flowchart.htmlLabels)){const e={label:b.replace(/fa[blrs]?:fa-[\w-]+/g,(e=>`<i class='${e.replace(":"," ")}'></i>`))};p=(0,s.a)(i,e).node(),p.parentNode.removeChild(p)}else{const e=l.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",d.labelStyle.replace("color:","fill:"));const t=b.split(o.e.lineBreakRegex);for(const n of t){const t=l.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=n,e.appendChild(t)}p=e}let f=0,w="";switch(r.type){case"round":f=5,w="rect";break;case"square":case"group":default:w="rect";break;case"diamond":w="question";break;case"hexagon":w="hexagon";break;case"odd":case"odd_right":w="rect_left_inv_arrow";break;case"lean_right":w="lean_right";break;case"lean_left":w="lean_left";break;case"trapezoid":w="trapezoid";break;case"inv_trapezoid":w="inv_trapezoid";break;case"circle":w="circle";break;case"ellipse":w="ellipse";break;case"stadium":w="stadium";break;case"subroutine":w="subroutine";break;case"cylinder":w="cylinder";break;case"doublecircle":w="doublecircle"}t.setNode(r.id,{labelStyle:d.labelStyle,shape:w,labelText:b,labelType:r.labelType,rx:f,ry:f,class:c,style:d.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:a.db.getTooltip(r.id)||"",domId:a.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:"group"===r.type?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:(0,o.c)().flowchart.padding}),o.l.info("setNode",{labelStyle:d.labelStyle,labelType:r.labelType,shape:w,labelText:b,rx:f,ry:f,class:c,style:d.style,id:r.id,domId:a.db.lookUpDomId(r.id),width:"group"===r.type?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:(0,o.c)().flowchart.padding})}))},w=function(e,t,n){o.l.info("abc78 edges = ",e);let r,a,s=0,i={};if(void 0!==e.defaultStyle){const t=(0,o.k)(e.defaultStyle);r=t.style,a=t.labelStyle}e.forEach((function(n){s++;const c="L-"+n.start+"-"+n.end;void 0===i[c]?(i[c]=0,o.l.info("abc78 new entry",c,i[c])):(i[c]++,o.l.info("abc78 new entry",c,i[c]));let d=c+"-"+i[c];o.l.info("abc78 new link id to be used is",c,d,i[c]);const p="LS-"+n.start,f="LE-"+n.end,w={style:"",labelStyle:""};switch(w.minlen=n.length||1,"arrow_open"===n.type?w.arrowhead="none":w.arrowhead="normal",w.arrowTypeStart="arrow_open",w.arrowTypeEnd="arrow_open",n.type){case"double_arrow_cross":w.arrowTypeStart="arrow_cross";case"arrow_cross":w.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":w.arrowTypeStart="arrow_point";case"arrow_point":w.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":w.arrowTypeStart="arrow_circle";case"arrow_circle":w.arrowTypeEnd="arrow_circle"}let u="",h="";switch(n.stroke){case"normal":u="fill:none;",void 0!==r&&(u=r),void 0!==a&&(h=a),w.thickness="normal",w.pattern="solid";break;case"dotted":w.thickness="normal",w.pattern="dotted",w.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":w.thickness="thick",w.pattern="solid",w.style="stroke-width: 3.5px;fill:none;";break;case"invisible":w.thickness="invisible",w.pattern="solid",w.style="stroke-width: 0;fill:none;"}if(void 0!==n.style){const e=(0,o.k)(n.style);u=e.style,h=e.labelStyle}w.style=w.style+=u,w.labelStyle=w.labelStyle+=h,void 0!==n.interpolate?w.curve=(0,o.n)(n.interpolate,l.c_6):void 0!==e.defaultInterpolate?w.curve=(0,o.n)(e.defaultInterpolate,l.c_6):w.curve=(0,o.n)(b.curve,l.c_6),void 0===n.text?void 0!==n.style&&(w.arrowheadStyle="fill: #333"):(w.arrowheadStyle="fill: #333",w.labelpos="c"),w.labelType=n.labelType,w.label=n.text.replace(o.e.lineBreakRegex,"\n"),void 0===n.style&&(w.style=w.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),w.labelStyle=w.labelStyle.replace("color:","fill:"),w.id=d,w.classes="flowchart-link "+p+" "+f,t.setEdge(n.start,n.end,w,s)}))},u={setConf:function(e){const t=Object.keys(e);for(const n of t)b[n]=e[n]},addVertices:f,addEdges:w,getClasses:function(e,t){return t.db.getClasses()},draw:async function(e,t,n,s){o.l.info("Drawing flowchart");let i=s.db.getDirection();void 0===i&&(i="TD");const{securityLevel:c,flowchart:d}=(0,o.c)(),p=d.nodeSpacing||50,b=d.rankSpacing||50;let u;"sandbox"===c&&(u=(0,l.Ys)("#i"+t));const h="sandbox"===c?(0,l.Ys)(u.nodes()[0].contentDocument.body):(0,l.Ys)("body"),g="sandbox"===c?u.nodes()[0].contentDocument:document,y=new r.k({multigraph:!0,compound:!0}).setGraph({rankdir:i,nodesep:p,ranksep:b,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let k;const x=s.db.getSubGraphs();o.l.info("Subgraphs - ",x);for(let r=x.length-1;r>=0;r--)k=x[r],o.l.info("Subgraph - ",k),s.db.addVertex(k.id,{text:k.title,type:k.labelType},"group",void 0,k.classes,k.dir);const v=s.db.getVertices(),m=s.db.getEdges();o.l.info("Edges",m);let S=0;for(S=x.length-1;S>=0;S--){k=x[S],(0,l.td_)("cluster").append("text");for(let e=0;e<k.nodes.length;e++)o.l.info("Setting up subgraphs",k.nodes[e],k.id),y.setParent(k.nodes[e],k.id)}f(v,y,t,h,g,s),w(m,y);const T=h.select(`[id="${t}"]`),_=h.select("#"+t+" g");if(await(0,a.r)(_,y,["point","circle","cross"],"flowchart",t),o.u.insertTitle(T,"flowchartTitleText",d.titleTopMargin,s.db.getDiagramTitle()),(0,o.o)(y,T,d.diagramPadding,d.useMaxWidth),s.db.indexNodes("subGraph"+S),!d.htmlLabels){const e=g.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),n=g.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",e.width),n.setAttribute("height",e.height),t.insertBefore(n,t.firstChild)}}Object.keys(v).forEach((function(e){const n=v[e];if(n.link){const r=(0,l.Ys)("#"+t+' [id="'+e+'"]');if(r){const e=g.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",n.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",n.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===c?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):n.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",n.linkTarget);const t=r.insert((function(){return e}),":first-child"),l=r.select(".label-container");l&&t.append((function(){return l.node()}));const o=r.select(".label");o&&t.append((function(){return o.node()}))}}}))}},h=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ${((e,t)=>{const n=d,r=n(e,"r"),l=n(e,"g"),o=n(e,"b");return p.Z(r,l,o,t)})(e.edgeLabelBackground,.5)};\n    // background-color: \n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`}}]);