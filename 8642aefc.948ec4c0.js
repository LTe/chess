(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{111:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(117),o=t(115);t(55);a.a=function(e){var a=Object(n.useRef)(null),i=r.a.onlyText(e.children),l=Object(n.useState)(""),s=l[0],u=l[1],m=Object(n.useState)(null),j=m[0],d=m[1],p=function(e){return"https://lichess.org/editor/"+e};return Object(n.useLayoutEffect)((function(){""===s&&u("board-"+o.v4())})),Object(n.useLayoutEffect)((function(){if(""!==s){var e=(0,t(116).pgnView)(s,{pgn:i,timerTime:"1",locale:"pl",startPlay:1,showResult:!0,boardSize:"340",showFen:!0,layout:"left",pieceStyle:"chesscom"});d(e)}}),[a,s]),c.a.createElement("div",null,c.a.createElement("a",{className:"lichessLink",onClick:function(){return open(p(j.base.chess.fen().replace(" w "," b ")))},target:"_blank"},c.a.createElement("strong",null,"Lichess (as black)")),c.a.createElement("a",{className:"lichessLink",onClick:function(){return open(p(j.base.chess.fen().replace(" b "," w ")))},target:"_blank"},c.a.createElement("strong",null,"Lichess (as white)")),c.a.createElement("div",{id:s,ref:a}),c.a.createElement("hr",null),c.a.createElement("div",null,c.a.createElement("strong",null,"PGN")),c.a.createElement("textarea",{className:"pgn",readOnly:!0,cols:2,rows:10,value:i}))}},88:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return m}));var n=t(3),c=t(7),r=(t(0),t(108)),o=t(111),i={title:"Manewr tr\xf3jk\u0105ta",sidebar_label:"Manewr tr\xf3jkata"},l={unversionedId:"manewr_trojkata",id:"manewr_trojkata",isDocsHomePage:!1,title:"Manewr tr\xf3jk\u0105ta",description:"Bia\u0142e zaczynaj\u0105 i zwycie\u017caja przeprowadzaj\u0105c tzw.",source:"@site/docs/manewr_trojkata.md",slug:"/manewr_trojkata",permalink:"/docs/manewr_trojkata",editUrl:"https://github.com/LTe/chess/edit/master/website/docs/manewr_trojkata.md",version:"current",sidebar_label:"Manewr tr\xf3jkata",sidebar:"docs",previous:{title:"Szach kr\xf3lem i Wie\u017c\u0105 + Hetman",permalink:"/docs/krol_i_wieza_hetman"},next:{title:"Prze\u0142om",permalink:"/docs/przelom"}},s=[],u={toc:s};function m(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Bia\u0142e zaczynaj\u0105 i zwycie\u017caja przeprowadzaj\u0105c tzw.\nmanewr tr\xf3jkata. W tej pozycji czarne przegrywaj\u0105, je\u015bli maja ruch.\nDoprowadzamy wiec do takiej samej pozycji z ruchem czarnych."),Object(r.b)(o.a,{mdxType:"PGN"},'[Event "?"] [Site "?"] [Date "2021.01.27"] [Round "?"] [White "?"] [Black "?"] [Result "*"] [Annotator "Marcin"] [SetUp "1"] [FEN "8/8/8/8/5kP1/4p2P/4K3/8 w - - 0 1"] [PlyCount "11"] [SourceVersionDate "2021.01.27"]',Object(r.b)("p",null,"{","[%cal Ge2e1,Ge1f1,Gf1e2][#]"," Biale zaczynaja i zwyciezaja przeprowadzajac tzw\nmanewr trojkata. W tej pozycji czarne przegrywaja, jesli maja ruch.\nDoprowadzamy wiec do takiej samej pozycji z ruchem czarnych} 1. Ke1 $1 Kg5 (\n1... Kf3 2. g5 $18) 2. Kf1 {","[%cal Ge2e1,Ge1f1,Gf1e2]","} Kf4 3. Ke2 $1 {manewr\nzakonczony i biale zwyciezaja} Ke4 4. g5 Kf5 5. h4 Ke4 6. g6 $18 *")),Object(r.b)(o.a,{mdxType:"PGN"},'[Event "?"] [Site "?"] [Date "2021.01.27"] [Round "?"] [White "?"] [Black "?"] [Result "*"] [Annotator "Marcin"] [SetUp "1"] [FEN "8/2k5/p1P5/P1K5/8/8/8/8 w - - 0 1"] [PlyCount "9"] [SourceVersionDate "2021.01.27"]',Object(r.b)("p",null,"{","[#]"," Biale zaczynaja i zwyciezaja} 1. Kd5 {znowu wygrywamy dzieki metodzie\ntrojkata} Kc8 2. Kc4 Kb8 $1 (2... Kc7 3. Kc5 $18 Kc8 4. Kb6 Kb8 5. Kxa6 $18) 3.\nKd4 $1 (3. Kc5 $2 Kc7 {i to samo co na poczatku}) 3... Kc8 (3... Kc7 4. Kc5 Kc8\n5. Kb6 $18) 4. Kd5 $1 Kc7 (4... Kd8 5. Kd6 Kc8 6. c7 Kb7 7. Kd7 $18) 5. Kc5 $18"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"}))))}m.isMDXComponent=!0}}]);