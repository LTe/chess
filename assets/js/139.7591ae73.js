(window.webpackJsonp=window.webpackJsonp||[]).push([[139,140],{124:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(215),r=a(16),c=a(27),s=a(224),i=a(3),u=a(217),m=a(218),p=a(254),d=a(258),h=a(259),b=a(257),y=a(219),g=a(225),f=a(270);var v=e=>l.a.createElement("svg",Object(i.a)({width:"20",height:"20",role:"img"},e),l.a.createElement("g",{fill:"#7a7a7a"},l.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),l.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"}))),k=a(260),j=a(99),E=a.n(j);const O=(e,t)=>"link"===e.type?Object(m.isSamePath)(e.href,t):"category"===e.type&&e.items.some(e=>O(e,t));function N({item:e,onItemClick:t,collapsible:a,activePath:o,...r}){const{items:c,label:s}=e,m=O(e,o),p=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)(()=>{t.current=e},[e]),t.current}(m),[d,h]=Object(n.useState)(()=>!!a&&(!m&&e.collapsed)),b=Object(n.useRef)(null),[y,g]=Object(n.useState)(void 0),f=(e=!0)=>{var t;g(e?(null===(t=b.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)(()=>{m&&!p&&d&&h(!1)},[m,p,d]);const v=Object(n.useCallback)(e=>{e.preventDefault(),y||f(),setTimeout(()=>h(e=>!e),100)},[y]);return 0===c.length?null:l.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:s},l.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&m,[E.a.menuLinkText]:!a}),onClick:a?v:void 0,href:a?"#!":void 0},r),s),l.a.createElement("ul",{className:"menu__list",ref:b,style:{height:y},onTransitionEnd:()=>{d||f(!1)}},c.map(e=>l.a.createElement(x,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:o}))))}function C({item:e,onItemClick:t,activePath:a,collapsible:n,...o}){const{href:r,label:c}=e,s=O(e,a);return l.a.createElement("li",{className:"menu__list-item",key:c},l.a.createElement(y.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":s}),to:r},Object(g.a)(r)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},o),c))}function x(e){switch(e.item.type){case"category":return l.a.createElement(N,e);case"link":default:return l.a.createElement(C,e)}}var S=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:o,isHidden:r}){const[c,s]=Object(n.useState)(!1),{navbar:{hideOnScroll:i},hideableSidebar:y}=Object(m.useThemeConfig)(),{isAnnouncementBarClosed:g}=Object(p.a)(),{scrollY:j}=Object(b.a)();Object(d.a)(c);const O=Object(h.a)();return Object(n.useEffect)(()=>{O===h.b.desktop&&s(!1)},[O]),l.a.createElement("div",{className:Object(u.a)(E.a.sidebar,{[E.a.sidebarWithHideableNavbar]:i,[E.a.sidebarHidden]:r})},i&&l.a.createElement(f.a,{tabIndex:-1,className:E.a.sidebarLogo}),l.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",E.a.menu,{"menu--show":c,[E.a.menuWithAnnouncementBar]:!g&&0===j})},l.a.createElement("button",{"aria-label":c?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{s(!c)}},c?l.a.createElement("span",{className:Object(u.a)(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement(k.a,{className:E.a.sidebarMenuIcon,height:24,width:24})),l.a.createElement("ul",{className:"menu__list"},t.map(t=>l.a.createElement(x,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),s(!1)},collapsible:a,activePath:e})))),y&&l.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(u.a)("button button--secondary button--outline",E.a.collapseSidebarButton),onClick:o},l.a.createElement(v,{className:E.a.collapseSidebarButtonIcon})))},_=a(229),T=a(253),w=a(24),P=a(100),I=a.n(P);function L({currentDocRoute:e,versionMetadata:t,children:a}){var c,i;const{siteConfig:p,isClient:d}=Object(r.default)(),{pluginId:h,permalinkToSidebar:b,docsSidebars:y,version:g}=t,f=b[e.path],k=y[f],[j,E]=Object(n.useState)(!1),[O,N]=Object(n.useState)(!1),C=Object(n.useCallback)(()=>{O&&N(!1),E(!j)},[O]);return l.a.createElement(s.a,{key:d,searchMetadatas:{version:g,tag:Object(m.docVersionSearchTag)(h,g)}},l.a.createElement("div",{className:I.a.docPage},k&&l.a.createElement("div",{className:Object(u.a)(I.a.docSidebarContainer,{[I.a.docSidebarContainerHidden]:j}),onTransitionEnd:e=>{e.currentTarget.classList.contains(I.a.docSidebarContainer)&&j&&N(!0)},role:"complementary"},l.a.createElement(S,{key:f,sidebar:k,path:e.path,sidebarCollapsible:null===(c=null===(i=p.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===c||c,onCollapse:C,isHidden:O}),O&&l.a.createElement("div",{className:I.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:C,onClick:C},l.a.createElement(v,null))),l.a.createElement("main",{className:I.a.docMainContainer},l.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",I.a.docItemWrapper,{[I.a.docItemWrapperEnhanced]:j})},l.a.createElement(o.a,{components:_.a},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,o=t.find(e=>Object(w.matchPath)(n.pathname,e));return o?l.a.createElement(L,{currentDocRoute:o,versionMetadata:a},Object(c.a)(t)):l.a.createElement(T.default,e)}},227:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let o=!1;l.rangeCount>0&&(o=l.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch(c){}return a.remove(),o&&(l.removeAllRanges(),l.addRange(o)),n&&n.focus(),r};e.exports=n,e.exports.default=n},228:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map(e=>e.trim()))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,l,o]=t;if(n&&o){n=parseInt(n),o=parseInt(o);const e=n<o?1:-1;"-"!==l&&".."!==l&&"\u2025"!==l||(o+=e);for(let t=n;t!==o;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},229:function(e,t,a){"use strict";var n=a(3),l=a(0),o=a.n(l),r=a(219),c=a(217),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(23).a,theme:s};function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},b=function(e,t){var a=e.plain,n=Object.create(null),l=e.styles.reduce((function(e,a){var n=a.languages,l=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=m({},e[t],l);e[t]=a})),e}),n);return l.root=a,l.plain=m({},a,{backgroundColor:null}),l};function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var g=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?b(e.theme,e.language):void 0;return t.themeDict=a})),u(this,"getLineProps",(function(e){var a=e.key,n=e.className,l=e.style,o=m({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(o.style=r.plain),void 0!==l&&(o.style=void 0!==o.style?m({},o.style,l):l),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),u(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,l=a.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===l&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===l&&!n)return o[a[0]];var r=n?{display:"inline-block"}:{},c=a.map((function(e){return o[e]}));return Object.assign.apply(Object,[r].concat(c))}})),u(this,"getTokenProps",(function(e){var a=e.key,n=e.className,l=e.style,o=e.token,r=m({},y(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==l&&(r.style=void 0!==r.style?m({},r.style,l):l),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r})),u(this,"tokenize",(function(e,t,a,n){var l={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",l);var o=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,l=e.children,o=this.getThemeDict(this.props),r=t.languages[a];return l({tokens:function(e){for(var t=[[]],a=[e],n=[0],l=[e.length],o=0,r=0,c=[],s=[c];r>-1;){for(;(o=n[r]++)<l[r];){var i=void 0,u=t[r],m=a[r][o];if("string"==typeof m?(u=r>0?u:["plain"],i=m):(u=h(u,m.type),m.alias&&(u=h(u,m.alias)),i=m.content),"string"==typeof i){var b=i.split(p),y=b.length;c.push({types:u,content:b[0]});for(var g=1;g<y;g++)d(c),s.push(c=[]),c.push({types:u,content:b[g]})}else r++,t.push(u),a.push(i),n.push(0),l.push(i.length)}r--,t.pop(),a.pop(),n.pop(),l.pop()}return d(c),s}(void 0!==r?this.tokenize(t,n,r,a):[n]),className:"prism-code language-"+a,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component),f=a(227),v=a.n(f),k=a(228),j=a.n(k),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=a(230),N=a(218);var C=()=>{const{prism:e}=Object(N.useThemeConfig)(),{isDarkTheme:t}=Object(O.a)(),a=e.theme||E,n=e.darkTheme||a;return t?n:a},x=a(79),S=a.n(x);const _=/{([\d,-]+)}/,T=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map(e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},w=/(?:title=")(.*)(?:")/;var P=({children:e,className:t,metastring:a})=>{const{prism:r}=Object(N.useThemeConfig)(),[s,u]=Object(l.useState)(!1),[m,p]=Object(l.useState)(!1);Object(l.useEffect)(()=>{p(!0)},[]);const d=Object(l.useRef)(null);let h=[],b="";const y=C(),f=Array.isArray(e)?e.join(""):e;if(a&&_.test(a)){const e=a.match(_)[1];h=j()(e).filter(e=>e>0)}a&&w.test(a)&&(b=a.match(w)[1]);let k=t&&t.replace(/language-/,"");!k&&r.defaultLanguage&&(k=r.defaultLanguage);let E=f.replace(/\n$/,"");if(0===h.length&&void 0!==k){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}})(k),a=f.replace(/\n$/,"").split("\n");let n;for(let l=0;l<a.length;){const o=l+1,r=a[l].match(t);if(null!==r){switch(r.slice(1).reduce((e,t)=>e||t,void 0)){case"highlight-next-line":e+=o+",";break;case"highlight-start":n=o;break;case"highlight-end":e+=`${n}-${o-1},`}a.splice(l,1)}else l+=1}h=j()(e),E=a.join("\n")}const O=()=>{v()(E),u(!0),setTimeout(()=>u(!1),2e3)};return o.a.createElement(g,Object(n.a)({},i,{key:String(m),theme:y,code:E,language:k}),({className:e,style:t,tokens:a,getLineProps:l,getTokenProps:r})=>o.a.createElement(o.a.Fragment,null,b&&o.a.createElement("div",{style:t,className:S.a.codeBlockTitle},b),o.a.createElement("div",{className:S.a.codeBlockContent},o.a.createElement("div",{tabIndex:0,className:Object(c.a)(e,S.a.codeBlock,"thin-scrollbar",{[S.a.codeBlockWithTitle]:b})},o.a.createElement("div",{className:S.a.codeBlockLines,style:t},a.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=l({line:e,key:t});return h.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(n.a)({key:t},a),e.map((e,t)=>o.a.createElement("span",Object(n.a)({key:t},r({token:e,key:t})))))}))),o.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(c.a)(S.a.copyButton),onClick:O},s?"Copied":"Copy"))))},I=(a(80),a(81)),L=a.n(I);var B=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(N.useThemeConfig)();return t?o.a.createElement(e,a,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(c.a)("anchor",{[L.a.enhancedAnchor]:!n}),id:t}),a.children,o.a.createElement("a",{className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#")):o.a.createElement(e,a)},D=a(82),M=a.n(D);const $={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?o.a.createElement(P,e):o.a.createElement("code",e):t},a:e=>o.a.createElement(r.a,e),pre:e=>o.a.createElement("div",Object(n.a)({className:M.a.mdxCodeBlock},e)),h1:B("h1"),h2:B("h2"),h3:B("h3"),h4:B("h4"),h5:B("h5"),h6:B("h6")};t.a=$},253:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(224);t.default=function(){return l.a.createElement(o.a,{title:"Page Not Found"},l.a.createElement("main",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);